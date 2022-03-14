import React from "react";
import idoModal from "../styles/ido.module.css";
import classes from "../styles/homepage.module.css";
import personal from "../resources/images/Placeholder.png";
import Eth from "../resources/images/Eth-logo.png";
import Telegram from "../resources/images/telegram.png";
import Twitter from "../resources/images/twitter.png";
import Discord from "../resources/images/discord.png";
import Medium from "../resources/images/medium.png";
import World from "../resources/images/world.png";
import videoIcon from "../resources/images/Video.png";
import Piechart from "../resources/images/pie chart.png";
const IDO = () => {
  return (
    <>
      <div className={idoModal["ido__bg"]}>
        <div className={idoModal["ido__container"]}>
          <div className={idoModal["timer__section"]}>
            <div className={idoModal["ido__badge__wrap"]}>
              <div className={idoModal["badge__content__wrap"]}>
                <div className={idoModal["badge__img"]}>
                  <img src={personal} alt="img" />
                </div>
                <div className={idoModal["badge__content"]}>
                  <h1>The waster Land</h1>
                  <p>Price(DDO) = 0.13 BUSD</p>
                </div>
              </div>
              <div className={idoModal["eth__logo"]}>
                <img src={Eth} alt="eth logo" />
              </div>
              <div className={idoModal["ido__timer"]}>
                <p>SALE END IN</p>
                <div className={idoModal["timer"]}>
                  <div className={idoModal["time"]}>
                    <h1>
                      08<span> D</span>
                    </h1>
                  </div>
                  <div className={idoModal["time"]}>
                    <h1>
                      08<span> H</span>
                    </h1>
                  </div>
                  <div className={idoModal["time"]}>
                    <h1>
                      08<span> M</span>
                    </h1>
                  </div>
                  <div className={idoModal["time"]}>
                    <h1>
                      08<span> S</span>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className={idoModal["ido__data__wrap"]}>
              <p> Total Raise 75,999.70 BUSD ( 86% )</p>

              <p>Allocation: 500 BUSD Max</p>

              <p>Targeted Raise 100,000 BUSD</p>
            </div>
            <div className={idoModal["loading-bar"]}>
              <div className={classes["dashboard-body-table-progress-container"]}>
                <div className={classes["dashboard-body-table-progress"]}>
                  {Array(102)
                    .fill(null)
                    .map((_val, index) => {
                      return (
                        <div
                          key={index}
                          className={`${
                            classes["dashboard-body-table-progress-single"]
                          }
                                      ${
                                        index < (70 / 100) * 100
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
              </div>
            </div>
            <div className={idoModal["ido__cta"]}>
              <div className={idoModal["claim__token"]}>
                <button>Connect</button>
              </div>
              <p>Participants 4017/5000</p>
              <div className={idoModal["ido__socials"]}>
                <ul>
                  <li>
                    <a href="">
                      <img src={Telegram} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img src={Twitter} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img src={Discord} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img src={Medium} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img src={World} alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={idoModal["information-wrapper"]}>
            <div className={idoModal["token-info"]}>
              <h1>Pool INFO</h1>
              <div className={idoModal["ido__info"]}>
                <div className={idoModal["information"]}>
                  <p>Token Distribution </p>
                  <span>Date UTC</span>
                </div>
                <div className={idoModal["information"]}>
                  <p>Min. Allocation </p>
                  <span>0.01 BUSD</span>
                </div>
                <div className={idoModal["information"]}>
                  <p>Max. Allocation</p>
                  <span>1531.13 BUSD</span>
                </div>
                <div className={idoModal["information"]}>
                  <p>Token Price </p>
                  <span>1 BUSD = 555.55 SIDUS</span>
                </div>
                <div className={idoModal["information"]}>
                  <p>Access type </p>
                  <span>Public</span>
                </div>
              </div>
            </div>
            <div className={idoModal["token-info"]}>
              <h1>TOKEN INFO</h1>
              <div className={idoModal["ido__info"]}>
                <div className={idoModal["information"]}>
                  <p>Token Name </p>
                  <span>The Wasted Lands </span>
                </div>
                <div className={idoModal["information"]}>
                  <p>Token Symbol </p>
                  <span>DDO</span>
                </div>
                <div className={idoModal["information"]}>
                  <p> Decimals </p>
                  <span>18</span>
                </div>
                <div className={idoModal["information"]}>
                  <p>Address </p>
                  <span> 0x22d40020282f9c8</span>
                </div>
                <div className={idoModal["information"]}>
                  <p> Total Supply </p>
                  <span>3,333,334.00 DDO</span>
                </div>
              </div>
            </div>
          </div>
          <div className={idoModal["project__summary"]}>
            <h1>Project Summary</h1>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur cites of the word in
              classical literature. <br />
              <br /> The standard chunk of Lorem Ipsum used since the 1500s is
              reproduced below for those interested. Sections 1.10.32 and
              1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
              reproduced in their exact original
            </p>
          </div>

          <div className={idoModal["ido__video"]}>
            <img src={videoIcon} alt="icon" />
          </div>
          <div className={idoModal["ido__table"]}>
            <table className={idoModal["customers"]}>
              <thead>
                <tr>
                  <th>Round</th>
                  <th>Opens</th>
                  <th>Closes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Allocation</td>
                  <td>20.02.2022 08:00:00 UTC </td>
                  <td>22.02.2022 24:00:00 UTC </td>
                </tr>
                <tr>
                  <td>Validator Round</td>
                  <td>29.02.2022 05:00:00 UTC </td>
                  <td>30.02.2022 03:00:00 UTC </td>
                </tr>
                <tr>
                  <td>Staking Round</td>
                  <td>08.03.2022 12:00:00 UTC </td>
                  <td>10.03.2022 05:00:00 UTC </td>
                </tr>
                <tr>
                  <td>Sale Ends</td>
                  <td>15.03.2022 02:00:00 UTC </td>
                  <td>18.03.2022 16:00:00 UTC </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={idoModal["project__summary"]}>
            <h1>Comparison</h1>
            <p>
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur cites of the word in
              classical literature. Standard chunkde Finibus Bonorum et Malorum"
              by Cicero are also reproduced in their exact original making it
              over 2000 years old. Richard McClintock
            </p>
          </div>
          <div
            className={`${idoModal["tokenomics"]} ${idoModal["project__summary"]}`}
          >
            <h1>Tokenomics</h1>
            <div className={idoModal["tokenomics-wrap"]}>
              <div className={idoModal["piechart"]}>
                <img src={Piechart} alt="chart" />
              </div>
              <div className={idoModal["tokenomics__stats"]}>
                <div className={idoModal["stats"]}>
                  <div className={idoModal["token-bg"]}></div>
                  <p>
                    Marketing <br /> 18.00%
                  </p>
                </div>
                <div className={idoModal["stats"]}>
                  <div className={idoModal["token-bg-3"]}></div>
                  <p>
                    Marketing <br /> 18.00%
                  </p>
                </div>
                <div className={idoModal["stats"]}>
                  <div className={idoModal["token-bg-2"]}></div>
                  <p>
                    Marketing <br /> 18.00%
                  </p>
                </div>
                <div className={idoModal["stats"]}>
                  <div className={idoModal["token-bg"]}></div>
                  <p>
                    Marketing <br /> 18.00%
                  </p>
                </div>
                <div className={idoModal["stats"]}>
                  <div className={idoModal["token-bg"]}></div>
                  <p>
                    Marketing <br /> 18.00%
                  </p>
                </div>
                <div className={idoModal["stats"]}>
                  <div className={idoModal["token-bg-2"]}></div>
                  <p>
                    Marketing <br /> 18.00%
                  </p>
                </div>
                <div className={idoModal["stats"]}>
                  <div className={idoModal["token-bg-2"]}></div>
                  <p>
                    Marketing <br /> 18.00%
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={idoModal["project__summary"]}>
            <h1>Roadmap</h1>
            <p>
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur cites of the word in
              classical literature. <br />
              <br /> Standard chunkde Finibus Bonorum et Malorum" by Cicero are
              also reproduced in their exact original making it over 2000 years
              old. Richard McClintock
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default IDO;
