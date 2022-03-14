import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import classes from "../styles/homepage.module.css";
import navbarClasses from "../styles/header.module.css";

const DefaultLayout = ({ children }: any) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
      }}
    >
      <Sidebar />
      <div
        style={{
          flex: 1,
          display: "flex",
          overflow: "auto",
          flexDirection: "column",
          
        }}
      >
        <Header />
        <div
          style={{
            flex: 1,
          
          }}
        >
          {children}
        </div>
        <section className={classes.applyForLaunch}>
          <h1>Want To Launch Your Project On LegioPad?</h1>
          <p>
            We have generous offers available for getting you started right
            away!
          </p>
          <button
            className={`${navbarClasses["navbar-button"]} ${navbarClasses["navbar-button-secondary"]}`}
          >
            Apply For Launch
          </button>
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default DefaultLayout;
