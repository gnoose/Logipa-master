import React, { useState } from "react";
import DefaultLayout from "../layouts/default";
import eth from "../resources/images/eth.png";
import tokenImg from "../resources/images/token-placeholder.png";
import tokenImg2 from "../resources/images/tokonIcon2.png";
import chivIcon from "../resources/images/chivron-icon.png";
import chivIconMob from "../resources/images/iconmob-down.png";
import classes from "../styles/homepage.module.css";
import idoModal from "../styles/ido.module.css";

const Farming = () => {
	const [showMobAccordion, setMobAccordion] = useState(false);
	const [showAccordion1, setshowAccordion1] = useState(false);
	const [showAccordion2, setshowAccordion2] = useState(false);
	const [showAccordion3, setshowAccordion3] = useState(false);
	const [showAccordion4, setshowAccordion4] = useState(false);
	const openAccordion1 = () => {
		console.log("hello");
		setshowAccordion1((prev) => !prev);
	};
	const openAccordion2 = () => {
		console.log("hello");
		setshowAccordion2((prev) => !prev);
	};
	const openAccordion3 = () => {
		console.log("hello");
		setshowAccordion3((prev) => !prev);
	};
	const openAccordion4 = () => {
		console.log("hello");
		setshowAccordion4((prev) => !prev);
	};
	const openMobAccordion = () => {
		console.log("hello");
		setMobAccordion((prev) => !prev);
	};
	return (
		<DefaultLayout>
			<div className={classes["dashboard-body"]}>
				<div className={classes["dashboard-body-phone-heading-title"]}>
					<h1>Farming</h1>
				</div>

				<div className={classes["dashboard-body-filter"]}>
					<div className={classes["dashboard-body-filter-radio"]}>
						<input type="radio" name="filter" id="openigo" />
						<label htmlFor="openigo">Active</label>
					</div>
					<div className={classes["dashboard-body-filter-radio"]}>
						<input type="radio" name="filter" id="upcomingigo" />
						<label htmlFor="upcomingigo">Inactive</label>
					</div>
					<div className={classes["dashboard-body-filter-radio"]}>
						<label className={classes["switch"]}>
							<input type="checkbox" />
							<span
								className={`${classes["slider"]} ${classes["round"]}`}
							></span>
						</label>
						<span className={classes["stake-switch"]}>staked only</span>
					</div>
				</div>

				{/* Phone */}
				<div className={classes["farming-container-mob"]}>
					<div className={classes["farming-mob-wrap"]}>
						<div className={classes["farming-content-mob"]}>
							<p>Pool</p>
							<div className={classes["farming_tokenimg"]}>
								<img src={tokenImg} alt="" />
								<img src={tokenImg2} alt="" />
								<span>ACT-BNB / ACT</span>
							</div>
						</div>
						<div className={classes["farming-content-mob"]}>
							<p>APY</p>
							<span>89.58 %</span>
						</div>
						<div className={classes["farming-content-mob"]}>
							<p>Staked</p>
							<span>2586.50 BNB</span>
						</div>
						<div className={classes["farming-content-mob"]}>
							<p>Staked</p>
							<span>2586.50 BNB</span>
						</div>
						<div className={classes["farming-content-mob"]}>
							<p>Earned</p>
							<span>899.50 BNB</span>
						</div>
						<div className={classes["farming-content-mob"]}>
							<p>total value locked</p>
							<span>$305,626.99</span>
						</div>

						<div
							className={
								showMobAccordion
									? classes["accordion__content__mob"]
									: classes["mobaccord-active"]
							}
						>
							<div className={classes["acc__box"]}>
								<h6>Deposit</h6>
								<div className={classes["inp"]}>
									<input type="text" placeholder="0.00" />
									<div className={classes["text"]}>
										<span>MAX</span>
										<button className={classes["orn-btn"]}>APPROVE</button>
									</div>
								</div>
								<p>Your Balance : 156 BMB</p>
							</div>
							<div className={classes["acc__box"]}>
								<h6>Withdraw</h6>
								<div className={classes["inp"]}>
									<input type="text" placeholder="0.00" />
									<div className={classes["text"]}>
										<span>MAX</span>
										<button
											className={`${classes["withdraw"]} ${classes["orn-btn"]}`}
										>
											Withdraw
										</button>
									</div>
								</div>
								<p>Deposited: 446.02 BNB</p>
							</div>
							<div className={`${classes["pending"]} ${classes["acc__box"]}`}>
								<h6>Pending Rewards</h6>
								<div className={classes["inp"]}>
									<span>58.99 BNB</span>
									<button className={classes["orn-btn"]}>Claim</button>
								</div>
							</div>
						</div>
						<div
							className={classes["accordion-icon_mob"]}
							onClick={openMobAccordion}
						>
							<img src={chivIconMob} alt="icon" />
						</div>
					</div>
				</div>
				<div
					className={classes["farming_table"]}
					style={{ width: "100%", overflowX: "auto" }}
				>
					{/* Web */}
					<table className={idoModal["customers"]}>
						<thead>
							<tr>
								<th>pools</th>
								<th>apy</th>
								<th>staked</th>
								<th>earned</th>
								<th>total value locked</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							<tr className={showAccordion1 ? classes["active"] : ""}>
								<td>
									<div className={classes["farming_tokenimg"]}>
										<img src={tokenImg} alt="" />
										<img src={tokenImg2} alt="" />
										<span>ACT-BNB / ACT</span>
									</div>
								</td>
								<td>42.00 %</td>
								<td>125.00 BNB</td>
								<td>15.40 BNB</td>
								<td>$41,50,486.80</td>
								<td onClick={openAccordion1} style={{ cursor: "Pointer" }}>
									<img src={chivIcon} alt="icon" />
								</td>
							</tr>
							<tr
								className={
									showAccordion1 ? classes["active"] : classes["accordion-disp"]
								}
							>
								<td colSpan={2}>
									<div className={classes["acc__box"]}>
										<h6>Deposit</h6>
										<div className={classes["inp"]}>
											<input type="text" placeholder="0.00" />
											<div className={classes["text"]}>
												<span>MAX</span>
												<button className={classes["orn-btn"]}>APPROVE</button>
											</div>
										</div>
										<p>Your Balance : 156 BMB</p>
									</div>
								</td>
								<td colSpan={2}>
									<div className={classes["acc__box"]}>
										<h6>Withdraw</h6>
										<div className={classes["inp"]}>
											<input type="text" placeholder="0.00" />
											<div className={classes["text"]}>
												<span>MAX</span>
												<button
													className={`${classes["withdraw"]} ${classes["orn-btn"]}`}
												>
													Withdraw
												</button>
											</div>
										</div>
										<p>Deposited: 446.02 BNB</p>
									</div>
								</td>
								<td colSpan={2}>
									<div
										className={`${classes["pending"]} ${classes["acc__box"]}`}
									>
										<h6>Pending Rewards</h6>
										<div className={classes["inp"]}>
											<span>58.99 BNB</span>
											<button className={classes["orn-btn"]}>Claim</button>
										</div>
										<p style={{ opacity: 0 }}>D</p>
									</div>
								</td>
							</tr>
							<tr
								className={
									showAccordion1 ? classes["active"] : classes["accordion-disp"]
								}
							>
								<td colSpan={2}>
									<div className={classes["botm-links"]}>
										<span>
											<a href="#">Get ACT-BNB</a>{" "}
										</span>
										<span>
											<a href="#">View Contract</a>{" "}
										</span>
										<span>
											<a href="#">Unstaking Fee</a>{" "}
										</span>
									</div>
								</td>
								<td colSpan={2}></td>
								<td colSpan={2}></td>
							</tr>
							<tr className={showAccordion2 ? classes["active"] : ""}>
								<td>
									<div className={classes["farming_tokenimg"]}>
										<img src={tokenImg} alt="" />
										<img src={tokenImg2} alt="" />
										<span>ACT-BNB / ACT</span>
									</div>
								</td>
								<td>42.00 %</td>
								<td>125.00 BNB</td>
								<td>15.40 BNB</td>
								<td>$41,50,486.80</td>
								<td onClick={openAccordion2} style={{ cursor: "Pointer" }}>
									<img src={chivIcon} alt="icon" />
								</td>
							</tr>
							<tr
								className={
									showAccordion2 ? classes["active"] : classes["accordion-disp"]
								}
							>
								<td colSpan={2}>
									<div className={classes["acc__box"]}>
										<h6>Deposit</h6>
										<div className={classes["inp"]}>
											<input type="text" placeholder="0.00" />
											<div className={classes["text"]}>
												<span>MAX</span>
												<button className={classes["orn-btn"]}>APPROVE</button>
											</div>
										</div>
										<p>Your Balance : 156 BMB</p>
									</div>
								</td>
								<td colSpan={2}>
									<div className={classes["acc__box"]}>
										<h6>Withdraw</h6>
										<div className={classes["inp"]}>
											<input type="text" placeholder="0.00" />
											<div className={classes["text"]}>
												<span>MAX</span>
												<button
													className={`${classes["withdraw"]} ${classes["orn-btn"]}`}
												>
													Withdraw
												</button>
											</div>
										</div>
										<p>Deposited: 446.02 BNB</p>
									</div>
								</td>
								<td colSpan={2}>
									<div
										className={`${classes["pending"]} ${classes["acc__box"]}`}
									>
										<h6>Pending Rewards</h6>
										<div className={classes["inp"]}>
											<span>58.99 BNB</span>
											<button className={classes["orn-btn"]}>Claim</button>
										</div>
										<p style={{ opacity: 0 }}>D</p>
									</div>
								</td>
							</tr>
							<tr
								className={
									showAccordion2 ? classes["active"] : classes["accordion-disp"]
								}
							>
								<td colSpan={2}>
									<div className={classes["botm-links"]}>
										<span>
											<a href="#">Get ACT-BNB</a>{" "}
										</span>
										<span>
											<a href="#">View Contract</a>{" "}
										</span>
										<span>
											<a href="#">Unstaking Fee</a>{" "}
										</span>
									</div>
								</td>
								<td colSpan={2}></td>
								<td colSpan={2}></td>
							</tr>
							<tr className={showAccordion3 ? classes["active"] : ""}>
								<td>
									<div className={classes["farming_tokenimg"]}>
										<img src={tokenImg} alt="" />
										<img src={tokenImg2} alt="" />
										<span>ACT-BNB / ACT</span>
									</div>
								</td>
								<td>42.00 %</td>
								<td>125.00 BNB</td>
								<td>15.40 BNB</td>
								<td>$41,50,486.80</td>
								<td onClick={openAccordion3} style={{ cursor: "Pointer" }}>
									<img src={chivIcon} alt="icon" />
								</td>
							</tr>
							<tr
								className={
									showAccordion3 ? classes["active"] : classes["accordion-disp"]
								}
							>
								<td colSpan={2}>
									<div className={classes["acc__box"]}>
										<h6>Deposit</h6>
										<div className={classes["inp"]}>
											<input type="text" placeholder="0.00" />
											<div className={classes["text"]}>
												<span>MAX</span>
												<button className={classes["orn-btn"]}>APPROVE</button>
											</div>
										</div>
										<p>Your Balance : 156 BMB</p>
									</div>
								</td>
								<td colSpan={2}>
									<div className={classes["acc__box"]}>
										<h6>Withdraw</h6>
										<div className={classes["inp"]}>
											<input type="text" placeholder="0.00" />
											<div className={classes["text"]}>
												<span>MAX</span>
												<button
													className={`${classes["withdraw"]} ${classes["orn-btn"]}`}
												>
													Withdraw
												</button>
											</div>
										</div>
										<p>Deposited: 446.02 BNB</p>
									</div>
								</td>
								<td colSpan={2}>
									<div
										className={`${classes["pending"]} ${classes["acc__box"]}`}
									>
										<h6>Pending Rewards</h6>
										<div className={classes["inp"]}>
											<span>58.99 BNB</span>
											<button className={classes["orn-btn"]}>Claim</button>
										</div>
										<p style={{ opacity: 0 }}>D</p>
									</div>
								</td>
							</tr>
							<tr
								className={
									showAccordion3 ? classes["active"] : classes["accordion-disp"]
								}
							>
								<td colSpan={2}>
									<div className={classes["botm-links"]}>
										<span>
											<a href="#">Get ACT-BNB</a>{" "}
										</span>
										<span>
											<a href="#">View Contract</a>{" "}
										</span>
										<span>
											<a href="#">Unstaking Fee</a>{" "}
										</span>
									</div>
								</td>
								<td colSpan={2}></td>
								<td colSpan={2}></td>
							</tr>
							<tr className={showAccordion4 ? classes["active"] : ""}>
								<td>
									<div className={classes["farming_tokenimg"]}>
										<img src={tokenImg} alt="" />
										<img src={tokenImg2} alt="" />
										<span>ACT-BNB / ACT</span>
									</div>
								</td>
								<td>42.00 %</td>
								<td>125.00 BNB</td>
								<td>15.40 BNB</td>
								<td>$41,50,486.80</td>
								<td onClick={openAccordion4} style={{ cursor: "Pointer" }}>
									<img src={chivIcon} alt="icon" />
								</td>
							</tr>
							<tr
								className={
									showAccordion4 ? classes["active"] : classes["accordion-disp"]
								}
							>
								<td colSpan={2}>
									<div className={classes["acc__box"]}>
										<h6>Deposit</h6>
										<div className={classes["inp"]}>
											<input type="text" placeholder="0.00" />
											<div className={classes["text"]}>
												<span>MAX</span>
												<button className={classes["orn-btn"]}>APPROVE</button>
											</div>
										</div>
										<p>Your Balance : 156 BMB</p>
									</div>
								</td>
								<td colSpan={2}>
									<div className={classes["acc__box"]}>
										<h6>Withdraw</h6>
										<div className={classes["inp"]}>
											<input type="text" placeholder="0.00" />
											<div className={classes["text"]}>
												<span>MAX</span>
												<button
													className={`${classes["withdraw"]} ${classes["orn-btn"]}`}
												>
													Withdraw
												</button>
											</div>
										</div>
										<p>Deposited: 446.02 BNB</p>
									</div>
								</td>
								<td colSpan={2}>
									<div
										className={`${classes["pending"]} ${classes["acc__box"]}`}
									>
										<h6>Pending Rewards</h6>
										<div className={classes["inp"]}>
											<span>58.99 BNB</span>
											<button className={classes["orn-btn"]}>Claim</button>
										</div>
										<p style={{ opacity: 0 }}>D</p>
									</div>
								</td>
							</tr>
							<tr
								className={
									showAccordion4 ? classes["active"] : classes["accordion-disp"]
								}
							>
								<td colSpan={2}>
									<div className={classes["botm-links"]}>
										<span>
											<a href="#">Get ACT-BNB</a>{" "}
										</span>
										<span>
											<a href="#">View Contract</a>{" "}
										</span>
										<span>
											<a href="#">Unstaking Fee</a>{" "}
										</span>
									</div>
								</td>
								<td colSpan={2}></td>
								<td colSpan={2}></td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</DefaultLayout>
	);
};

export default Farming;
