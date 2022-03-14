import React from "react";
import classes from "../styles/statistics.module.css";
import graph from "../resources/svgs/graph.svg";

const Statistics = ({
  price = "$7,868,163.54",
  description = "Total Value Locked",
}) => {
  return (
    <main className={classes.container}>
      <div className={classes.content}>
        <p>{price}</p>
        <p>{description}</p>
      </div>

      <img src={graph} />
    </main>
  );
};

export default Statistics;
