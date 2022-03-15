import React, { useContext } from 'react';
import { createPortal } from "react-dom";

import { AppContext } from '../context/app-context';
import classes from "../styles/dialog.module.css";
import Fox from "../resources/svgs/fox.svg";
import ArrowRight from "../resources/svgs/arrowRight.svg";
import Wrap from "../resources/svgs/wrap.svg";
import Circle from "../resources/svgs/circle.svg";
import Security from "../resources/svgs/security.svg";
import Close from "../resources/svgs/close.svg";

const list = [
  {
    title: "MetaMask",
    icon: Fox,
  },
  {
    title: "CoinBase",
    icon: Circle,
  },
  {
    title: "Trust Wallet",
    icon: Security,
  },
  {
    title: "WalletConnect",
    icon: Wrap,
  },
];

const DropDown = ({ title, icon }: any) => {
  return (
    <main className={classes.dropdown}>
      <div>
        <img src={icon} />
        <h1>{title}</h1>
      </div>
      <img src={ArrowRight} />
    </main>
  );
};

const Dialog = ({ setDialog, dialog }: any) => {
  if (!dialog) return null;
  const { connect } = useContext(AppContext);

  const walletConnectHandle = ({title, icon}: any) => {
    connect();
    setDialog(false);
  };

  return (
    <main className={classes.container}>
      <section>
        <div className={classes.header}>
          Connect Wallet{" "}
          <span
            style={{ marginRight: "10px", cursor: "pointer" }}
            onClick={setDialog.bind(this, false)}
          >
            <img src={Close} />
          </span>
        </div>
        <p>Please select a wallet to connect to this marketplace</p>

        {list.map((content: any, index: any) => (
          <div key={index} style={{ cursor: "pointer" }} onClick={() => walletConnectHandle(content)}>
            <DropDown {...content} />
          </div>
        ))}

        <h5>
          By connecting your wallet, you agree to our{" "}
          <span>Terms of Service</span> and our
          <span> Privacy Policy.</span>
        </h5>
      </section>
    </main>
  );
};

const PortalDialog = (props: any) => {
  return createPortal(
    <Dialog {...props} />,
    document.getElementById("dialog") as Element
  );
};

export default PortalDialog;
