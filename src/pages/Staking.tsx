import React from "react";
import Statistics from "../components/Statistics";
import DefaultLayout from "../layouts/default";
import classes from "../styles/staking.module.css";

const list = [
  {
    title: "Lock Period:",
    hint: "14 days",
    subtitle: "APY Rate",
  },
  {
    title: "Re-locks on registration:",
    hint: "Yes",
    subtitle: "12%",
    subtitleStyles: { fontSize: "30px", color: "#db3121", fontWeight: "bold" },
  },
  {
    title: "Early unstake fee:",
    hint: "25%",
    subtitle: "*API is",
    subtitleStyles: { color: "#bebdbd", fontWeight: "lighter" },
  },
  {
    title: "Status:",
    hint: "Unlocked",
    subtitle: "dynamic",
    subtitleStyles: { color: "#bebdbd", fontWeight: "lighter" },
  },
];

const Balance = ({ title, btnProps, inputSubtitle, isPrimary }: any) => {
  return (
    <main className={classes.balance}>
      <p>{title}</p>
      <section>
        <div>
          <input type="text" />
          <p>{inputSubtitle}</p>
        </div>
        <button
          style={btnProps.style}
          className={`${classes["staking-button"]} ${
            isPrimary
              ? classes["staking-button-primary"]
              : classes["staking-button-secondary"]
          }`}
        >
          {btnProps.title}
        </button>
      </section>
    </main>
  );
};

const Staking = () => {
  return (
    <DefaultLayout>
      <main className={classes.container}>
        <section className={classes.stats}>
          <h1>Participant IGO Stake</h1>
          <div className={classes.price}>
            <p>256.50 BUSD</p>
            <p>Total Stake</p>
          </div>
          <hr />
          <ul>
            {list.map(({ title, hint, subtitle, subtitleStyles }, index) => (
              <li key={index}>
                <p>
                  {title} <span>{hint}</span>
                </p>{" "}
                <p className={classes.subtitle} style={subtitleStyles}>
                  {subtitle}
                </p>
              </li>
            ))}
          </ul>

          <Balance
            title="Balance: 2889.00 BUSD"
            btnProps={{ title: "APPROVE" }}
            inputSubtitle="MAX"
            isPrimary={true}
          />

          <Balance
            title="Staked: 256.50 BUSD"
            btnProps={{
              title: "WITHDRAW",
              style: {
                backgroundColor: "#3b3837",
                border: "2px solid #F3F3F31A",
              },
            }}
            inputSubtitle="MAX"
          />
        </section>
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            width: "100%",
          }}
        >
          <Statistics />
          <Statistics price="158.50 %" description="APY" />
          <Statistics price="5699" description="Number of Stakers" />
        </section>
      </main>
    </DefaultLayout>
  );
};

export default Staking;
