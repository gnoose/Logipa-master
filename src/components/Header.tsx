import React, { useContext, useEffect, useMemo, useState } from 'react';
import downArrow from "../resources/images/down.png";
import classes from "../styles/header.module.css";
import PortalDialog from "./Dialog";
import Logo from "../resources/images/logo.png";
import { BiMenu, BiX } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import {
	SIDEBAR_IDO_NAMESPACE,
	SIDEBAR_STAKING_NAMESPACE,
	SIDEBAR_CALENDAR_NAMESPACE,
} from "../constants/constants";
import { AppContext } from '../context/app-context';

const data = [
	{
		title: SIDEBAR_IDO_NAMESPACE,
		route: "/",
	},
	{
		title: SIDEBAR_STAKING_NAMESPACE,
		route: "/staking",
	},
	{
		title: SIDEBAR_CALENDAR_NAMESPACE,
		route: "/calendar",
	},
];

const Header = () => {
	const navigate = useNavigate();
	const [dialog, setDialog] = useState(false);
	const [sidebar, setSidebar] = useState(false);
	const [active, setActive] = useState(SIDEBAR_IDO_NAMESPACE);
	const { connected, wallet } = useContext(AppContext);

	const shortenTxHash = useMemo(() => {
		if (connected) {
			return wallet ? wallet.substr(0, 6) + "..." + wallet.substr(wallet.length-4) : '';
		} else {
			return '';
		}
	}, [connected, wallet]);

	useEffect(() => {
		const dialogElement = document.getElementById("dialog");

		if (dialogElement) {
			if (dialog) {
				dialogElement.style.zIndex = "500";
			} else dialogElement.style.zIndex = "-1";
		}
	}, [dialog]);

	useEffect(() => {
		setActive(window.location.pathname);
	}, [sidebar]);

	return (
		<header className={classes.container}>
			<div className={classes["sidebar-icon-active"]}>
				<img style={{ transform: "scale(0.8)" }} src={Logo} />
			</div>

			<div className={classes.logoSection}>
				<h1>Explore Igos</h1>
			</div>

			<div className={classes.btn} onClick={setSidebar.bind(this, !sidebar)}>
				{sidebar ? (
					<BiX fontSize={30} style={{ marginRight: "20px" }} />
				) : (
					<BiMenu fontSize={30} style={{ marginRight: "20px" }} />
				)}
			</div>

			{sidebar && (
				<div
					style={{
						width: "100%",
						height: "calc(100vh - 90px)",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						position: "absolute",
						flexDirection: "column",
						top: "90px",
						background: "#110D0C",
						gap: "10px",
					}}
				>
					{data.map((val: any, index: any) => {
						return (
							<div
								key={index}
								style={{
									borderBottom:
										active === val.route &&
										val.title !== SIDEBAR_CALENDAR_NAMESPACE
											? "4px #DB3121 solid"
											: "none",
								}}
								onClick={() => {
									navigate(val.route);
									setSidebar(false);
								}}
							>
								<h1>{val.title}</h1>
							</div>
						);
					})}
				</div>
			)}

			<div className={classes["navbar-buttons"]}>
				<button
					className={`${classes["navbar-button"]} ${classes["navbar-button-primary"]}`}
				>
					Buy TOKEN <img src={downArrow} />
				</button>
				<button
					onClick={() => setDialog(true)}
					className={`${classes["navbar-button"]} ${classes["navbar-button-secondary"]}`}
				>
					{shortenTxHash ? shortenTxHash : 'Connect'}
				</button>
			</div>
			<PortalDialog setDialog={setDialog} dialog={dialog} />
		</header>
	);
};

export default Header;
