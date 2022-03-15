import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { ethers, BigNumber, BigNumberish } from "ethers";

import Statistics from "../components/Statistics";
import DefaultLayout from "../layouts/default";
import classes from "../styles/staking.module.css";
import { AppContext } from '../context/app-context';
import { stakingContractAddress, sfundContractAddress } from '../constants/constants';
import stakingContractAbi from '../abi/contract-14.json';
import sfundContractAbi from '../abi/sfund.json';
import { getSFundPrice } from '../services';

const Balance = ({ title, btnProps, inputSubtitle, isPrimary, action, noInput }: any) => {
  const [value, setValue] = useState(0);
  return (
    <main className={classes.balance}>
      <p>{title}</p>
      <section>
        {!noInput && <div>
          <input type="text" value={value} onChange={event => setValue(event.target.value as any)} />
          <p>{inputSubtitle}</p>
        </div>}
        <button
          onClick={() => action(value)}
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
  const [walletBalance, setWalletBalance] = useState(0);
  const [stakedBalance, setStakedBalance] = useState(0);
  const [totalStakedAmount, setTotalStakemount] = useState(0);
  const [stakerCount, setStakerCount] = useState(0);
  const [rate, setRate] = useState(0);

  const {connected, provider, wallet} = useContext(AppContext);

  const idToHexString = useCallback((id: number) => {
    return "0x" + id.toString(16);
  },[]);

  const calcAmount = useCallback((value: BigNumber) => {
    let _balance = value.mul(10000).div(ethers.constants.WeiPerEther);
    return parseFloat(_balance.toString())/10000;
  }, []);

  const checkChainId = useCallback(async () => {
    if(connected) {
      const id = await provider.getNetwork().then(network => network.chainId);
      if (id != 56) {
        alert("Please switch to a suppoted network!");
        await provider.send("wallet_switchEthereumChain", [{chainId: idToHexString(56)}]);
      }
    }
  }, [connected, provider]);

  const approve = useCallback(async (value) => {
    if (isNaN(value)) {
      alert('Input integer value.');
      return;
    }
    if (value === 0 || value > walletBalance) {
      alert('Value should be less than balance and should not be zero.');
      return;
    }
    if (connected) {
      // async function bscFinalizeSwap(tokenAddr, amount){
      //   let data = bscBridge.methods.finalizeSwap(tokenAddr, amount);
      //   let encodedABI = data.encodeABI();
      //   let signedTx = await bscWeb3.eth.accounts.signTransaction(
      //     {
      //       from: myAccount,
      //       to: bscBridgeAddress,
      //       data: encodedABI,
      //       gas: 300000,
      //       value: 0
      //     },
      //     pvKey
      //   );
      //   try {
      //     const success = await bscWeb3.eth.sendSignedTransaction(signedTx.rawTransaction);
      //     console.log(success);
      //   } catch (e) {
      //     console.log(e);
      //   }
      // }
      const price = ethers.constants.WeiPerEther.mul(value * 100000).div(100000);
      const sfundContractInstance = new ethers.Contract(sfundContractAddress, sfundContractAbi, provider.getSigner());
      const pendingSfund = await sfundContractInstance.approve(stakingContractAddress, price);
      await pendingSfund.wait();

      const contractInstance = new ethers.Contract(stakingContractAddress, stakingContractAbi, provider.getSigner());
      const stakingPending = await contractInstance.stake(price);
      await stakingPending.wait();
      getInitialValues();
    }
  }, []);


  const withdraw = useCallback(async (value) => {
    if (connected) {
      const contractInstance = new ethers.Contract(stakingContractAddress, stakingContractAbi, provider.getSigner());
      const withrawPending = await contractInstance.withdraw();
      await withrawPending.wait();
      getInitialValues();
    }
  }, []);

  const getInitialValues = useCallback(async () => {
    if (connected) {
      // const result = await provider.getBalance(wallet);
      // setWalletBalance(calcAmount(result));
      const sfundContractInstance = new ethers.Contract(sfundContractAddress, sfundContractAbi, provider.getSigner());
      const _sfundBalance = await sfundContractInstance.balanceOf(wallet);
      setWalletBalance(calcAmount(_sfundBalance));

      const contractInstance = new ethers.Contract(stakingContractAddress, stakingContractAbi, provider.getSigner());
      const _stakeResult = await contractInstance.userDeposits(wallet);
      setStakedBalance(calcAmount(_stakeResult[0]));
      const _rateResult = await contractInstance.rate();
      setRate(parseFloat(_rateResult.toString()));
      const _stakerCountResult = await contractInstance.totalParticipants();
      setStakerCount(parseFloat(_stakerCountResult.toString()));
      const _stakedTotalResult = await contractInstance.stakedTotal();
      const _sfundPrice: any = await getSFundPrice();
      setTotalStakemount(calcAmount(_stakedTotalResult) * (_sfundPrice.data['seedify-fund'].usd || 0));
    }
    return () => {
      setTotalStakemount(0);
    }
  }, [connected, provider]);

  useEffect(() => {
    checkChainId();
    getInitialValues();
  }, [connected, provider]);

  return (
    <DefaultLayout>
      <main className={classes.container}>
        <section className={classes.stats}>
          <h1>Participant IGO Stake</h1>
          <div className={classes.price}>
            <p>{ stakedBalance + " SFUND" }</p>
            <p>Total Stake</p>
          </div>
          <hr />
          <ul>
            <li>
              <p>Lock Period: <span>14 days</span></p>{" "}
              <p className={classes.subtitle}>APY Rate</p>
            </li>
            <li>
              <p>Re-locks on registration: <span>Yes</span></p>{" "}
              <p className={classes.subtitle} style={{fontSize: "30px", color: "#db3121", fontWeight: "bold"}}>{rate}%</p>
            </li>
            <li>
              <p>Early unstake fee: <span>0%</span></p>{" "}
              <p className={classes.subtitle} style={{ color: "#bebdbd", fontWeight: "lighter" }}>*API is</p>
            </li>
            <li>
              <p>Status: <span>{!!stakedBalance ? 'Locked' : 'Unlocked'}</span></p>{" "}
              <p className={classes.subtitle} style={{ color: "#bebdbd", fontWeight: "lighter" }}>dynamic</p>
            </li>
          </ul>

          <Balance
            title={ "Balance: " + walletBalance +" SFUND" }
            btnProps={{ title: "APPROVE" }}
            inputSubtitle="MAX"
            isPrimary={true}
            action={approve}
            noInput={false}
          />

          <Balance
            title={ "Staked: " + stakedBalance + " SFUND" }
            btnProps={{
              title: "WITHDRAW",
              style: {
                backgroundColor: "#3b3837",
                border: "2px solid #F3F3F31A",
                height: "60px"
              },
            }}
            inputSubtitle="MAX"
            action={withdraw}
            noInput={true}
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
          <Statistics price={"$" + totalStakedAmount.toLocaleString()} description="Total Value Locked" />
          {/*<Statistics price="158.50 %" description="APY" />*/}
          <Statistics price={stakerCount.toString()} description="Number of Stakers" />
        </section>
      </main>
    </DefaultLayout>
  );
};

export default Staking;
