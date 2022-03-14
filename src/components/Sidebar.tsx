import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "../styles/sidebar.module.css";
import Rocket from "../resources/svgs/rocket.svg";
import Staking from "../resources/svgs/staking.svg";
import Calender from "../resources/svgs/cal.svg";
import Logo from "../resources/images/logo.png";
import {
	SIDEBAR_IDO_NAMESPACE,
	SIDEBAR_STAKING_NAMESPACE,
	SIDEBAR_CALENDAR_NAMESPACE,
} from "../constants/constants";

const data = [
	{
		icon: Rocket,
		title: SIDEBAR_IDO_NAMESPACE,
		route: "/",
	},
	{
		icon: Staking,
		title: SIDEBAR_STAKING_NAMESPACE,
		route: "/staking",
	},
	{
		icon: Calender,
		title: SIDEBAR_CALENDAR_NAMESPACE,
		route: "/calendar",
	},
];

const Sidebar = () => {
	const [active, setActive] = useState(SIDEBAR_IDO_NAMESPACE);

	const navigate = useNavigate();

	useEffect(() => {
		const _active =
			window.location.pathname.toString() === "/"
				? SIDEBAR_IDO_NAMESPACE
				: window.location.pathname.toString().includes("/staking")
				? SIDEBAR_STAKING_NAMESPACE
				: SIDEBAR_IDO_NAMESPACE;
		setActive(_active);
	}, []);

	return (
		<menu className={classes.container}>
			{data.map((val: any, index: any) => {
				return (
					<div
						key={index}
						className={`${classes["sidebar-icon"]} ${
							active === val.title && classes["sidebar-icon-active"]
						}`}
						onClick={() => navigate(val.route)}
					>
						<img
							style={{ transform: "scale(0.8)" }}
							src={val.icon}
							alt="icon"
						/>
						<h4 style={{ transform: "scale(0.8)" }}>{val.title}</h4>
					</div>
				);
			})}
		</menu>
	);
};

export default Sidebar;
