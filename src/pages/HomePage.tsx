import React, { useState } from "react";
import DefaultLayout from "../layouts/default";
import eth from "../resources/images/eth.png";
import rowImg from "../resources/images/row-img.png";
import search from "../resources/images/search.png";
import classes from "../styles/homepage.module.css";

const data = [
  {
    image: rowImg,
    projectName: "KyberDyne",
    projectPrice: "price (GAC) =  0.59 BUSD",
    chain: eth,
    endIn: "0D  12H  15M  58S",
    totalRaise: "100,000 BUSD (85%)",
    progress: 70,
  },
  {
    image: rowImg,
    projectName: "KyberDyne",
    projectPrice: "price (GAC) =  0.59 BUSD",
    chain: eth,
    endIn: "0D  12H  15M  58S",
    totalRaise: "100,000 BUSD (85%)",
    progress: 50,
  },
  {
    image: rowImg,
    projectName: "KyberDyne",
    projectPrice: "price (GAC) =  0.59 BUSD",
    chain: eth,
    endIn: "0D  12H  15M  58S",
    totalRaise: "100,000 BUSD (85%)",
    progress: 25,
  },
  {
    image: rowImg,
    projectName: "KyberDyne",
    projectPrice: "price (GAC) =  0.59 BUSD",
    chain: eth,
    endIn: "0D  12H  15M  58S",
    totalRaise: "100,000 BUSD (85%)",
    progress: 100,
  },
  {
    image: rowImg,
    projectName: "KyberDyne",
    projectPrice: "price (GAC) =  0.59 BUSD",
    chain: eth,
    endIn: "0D  12H  15M  58S",
    totalRaise: "100,000 BUSD (85%)",
    progress: 70,
  },
];

const HomePage = () => {
  const [currentPage, setCurrectPage] = useState(1);
  const [totalPages, setTotalPages] = useState(5);

  return (
    <DefaultLayout>
      <div className={classes["dashboard-body"]}>
        <div className={classes["dashboard-body-phone-heading-title"]}>
          <h1>
            Explore <br /> Igos
          </h1>
        </div>

        <div className={classes["dashboard-body-filter"]}>
          <div className={classes["dashboard-body-filter-radio"]}>
            <input type="radio" name="filter" id="openigo" />
            <label htmlFor="openigo">open igo</label>
          </div>
          <div className={classes["dashboard-body-filter-radio"]}>
            <input type="radio" name="filter" id="upcomingigo" />
            <label htmlFor="upcomingigo">upcoming</label>
          </div>
          <div className={classes["dashboard-body-filter-radio"]}>
            <input type="radio" name="filter" id="pastigo" />
            <label htmlFor="pastigo">past igo</label>
          </div>
        </div>

        <div className={classes["dashboard-body-header"]}>
          <div className={classes["dashboard-body-header-search"]}>
            <img src={search} alt="search" />
            <input placeholder="Search by name, token, address" />
          </div>

          <div className={classes["dashboard-body-header-selects"]}>
            <select>
              <option>All Acess</option>
            </select>
            <div
              className={classes["dashboard-body-header-selects-divider"]}
            ></div>
            <select>
              <option>All Block Chain</option>
            </select>
            <div
              className={classes["dashboard-body-header-selects-divider"]}
            ></div>
          </div>
        </div>

        {/* Phone */}
        <div className={classes["dashboard-body-cards"]}>
          {data.map((val, index) => {
            return (
              <div key={index} className={classes["dashboard-body-card"]}>
                <div>
                  <div className={classes["dashboard-body-table-project-name"]}>
                    <img src={val.image} alt="project" />
                    <div>
                      <h3>{val.projectName}</h3>
                      <p>{val.projectPrice}</p>
                    </div>
                    <img
                      style={{ width: "30px" }}
                      alt="chain"
                      src={val.chain}
                    />
                  </div>
                </div>

                <div>
                  <div className={classes["dashboard-body-card-header"]}>
                    Ends In
                  </div>
                  {val.endIn}
                </div>

                <div>
                  <div className={classes["dashboard-body-card-header"]}>
                    Total Raise
                  </div>
                  {val.totalRaise}
                </div>

                <div>
                  <div className={classes["dashboard-body-card-header"]}>
                    Progress
                  </div>
                  <div
                    className={
                      classes["dashboard-body-table-progress-container"]
                    }
                  >
                    <div className={classes["dashboard-body-table-progress"]}>
                      {Array(20)
                        .fill(null)
                        .map((_val, index) => {
                          return (
                            <div
                              key={index}
                              className={`${
                                classes["dashboard-body-table-progress-single"]
                              }
                                    ${
                                      index < (val.progress / 100) * 20
                                        ? classes[
                                            "dashboard-body-table-progress-single-active"
                                          ]
                                        : ""
                                    }
                                    `}
                            ></div>
                          );
                        })}
                    </div>
                    {val.progress + "%"}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ width: "100%", overflowX: "auto" }}>
          {/* Web */}
          <table className={classes["dashboard-body-table"]}>
            <thead>
              <th>Project Name</th>
              <th>Chain</th>
              <th>End In</th>
              <th>Total Raise</th>
              <th>Progress</th>
            </thead>
            <tbody>
              {data.map((val: any, index: any) => {
                return (
                  <tr key={index}>
                    <td>
                      <div
                        className={
                          classes["dashboard-body-table-project-name"]
                        }
                      >
                        <img src={val.image} alt="project" />
                        <div>
                          <h3>{val.projectName}</h3>
                          <p>{val.projectPrice}</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <img
                        style={{ width: "30px" }}
                        alt="chain"
                        src={val.chain}
                      />
                    </td>
                    <td>{val.endIn}</td>
                    <td>{val.totalRaise}</td>
                    <td>
                      <div
                        className={
                          classes["dashboard-body-table-progress-container"]
                        }
                      >
                        <div
                          className={classes["dashboard-body-table-progress"]}
                        >
                          {Array(20)
                            .fill(null)
                            .map((_val, index) => {
                              return (
                                <div
                                  key={index}
                                  className={`${
                                    classes[
                                      "dashboard-body-table-progress-single"
                                    ]
                                  }
                                  ${
                                    index < (val.progress / 100) * 20
                                      ? classes[
                                          "dashboard-body-table-progress-single-active"
                                        ]
                                      : ""
                                  }
                                  `}
                                ></div>
                              );
                            })}
                        </div>
                        {val.progress + "%"}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className={classes["dashboard-body-table-pagination"]}>
          <div
            className={classes["dashboard-body-table-pagination-button"]}
            onClick={() =>
              setCurrectPage(currentPage > 1 ? currentPage - 1 : currentPage)
            }
          >
            {"<"}
          </div>
          {Array(totalPages)
            .fill(null)
            .map((_, index) => {
              return (
                <div
                  key={index}
                  className={`${
                    classes["dashboard-body-table-pagination-button"]
                  } ${
                    currentPage === index + 1 &&
                    classes["dashboard-body-table-pagination-button-active"]
                  }`}
                  onClick={() => setCurrectPage(index + 1)}
                >
                  {index + 1}
                </div>
              );
            })}
          <div
            className={classes["dashboard-body-table-pagination-button"]}
            onClick={() =>
              setCurrectPage(
                currentPage < totalPages ? currentPage + 1 : currentPage
              )
            }
          >
            {">"}
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default HomePage;
