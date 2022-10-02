import React, { useEffect, useState } from 'react';
import { ethers } from "ethers";

function App() {
  const [depositValue, setDepositValue] = useState(0);
  const [referralValue, setReferralValue] = useState('');
  const [wbalance, setWBalance] = useState();
  const [balance, setBalance] = useState();

  const [countchefs, setTChefs] = useState();
  const [counttowers, setTTowers] = useState();

  const [countpartners, setPartners] = useState();
  const [countpartnerdeps, setPartnerDeps] = useState();
  const [countcoins, setCoins] = useState();
  const [countmoney, setMoney] = useState();
  const [countpmoney, setPMoney] = useState();
  const [countptimestamp, setPTimestamp] = useState();
  const [countymoney, setYMoney] = useState();
  const [playerwallet, setPWallet] = useState();

  const [towerF1, setTowerF1] = useState();
  const [towerF2, setTowerF2] = useState();
  const [towerF3, setTowerF3] = useState();
  const [towerF4, setTowerF4] = useState();
  const [towerF5, setTowerF5] = useState();
  const [towerF6, setTowerF6] = useState();
  const [towerF7, setTowerF7] = useState();
  const [towerF8, setTowerF8] = useState();

  const pF1upgrades = [500,625,780,970,1200,99999999];
  const pF2upgrades = [1500,1800,2300,3000,3600,99999999];
  const pF3upgrades = [4500,5600,7000,8700,1100,99999999];
  const pF4upgrades = [13500,16800,21000,26000,33000,99999999];
  const pF5upgrades = [40500,50600,63000,79000,98000,99999999];
  const pF6upgrades = [120000,150000,187000,235000,293000,99999999];
  const pF7upgrades = [365000,456000,570000,713000,890000,99999999];
  const pF8upgrades = [1000000,1200000,1560000,2000000,2500000,99999999];

  const F1upgrades = ['Recruit for 500 💎','Upgrade for 625 💎','Upgrade for 780 💎','Upgrade for 970 💎','Upgrade for 1200 💎','Max Level Reached'];
  const F2upgrades = ['Recruit for 1500 💎','Upgrade for 1800 💎','Upgrade for 2300 💎','Upgrade for 3000 💎','Upgrade for 3600 💎','Max Level Reached'];
  const F3upgrades = ['Recruit for 4500 💎','Upgrade for 5600 💎','Upgrade for 7000 💎','Upgrade for 8700 💎','Upgrade for 11000 💎','Max Level Reached'];
  const F4upgrades = ['Recruit for 13500 💎','Upgrade for 16800 💎','Upgrade for 21000 💎','Upgrade for 26000 💎','Upgrade for 33000 💎','Max Level Reached'];
  const F5upgrades = ['Recruit for 40500 💎','Upgrade for 50600 💎','Upgrade for 63000 💎','Upgrade for 79000 💎','Upgrade for 98000 💎','Max Level Reached'];
  const F6upgrades = ['Recruit for 120000 💎','Upgrade for 150000 💎','Upgrade for 187000 💎','Upgrade for 235000 💎','Upgrade for 293000 💎','Max Level Reached'];
  const F7upgrades = ['Recruit for 365000 💎','Upgrade for 456000 💎','Upgrade for 570000 💎','Upgrade for 713000 💎','Upgrade for 890000 💎','Max Level Reached'];
  const F8upgrades = ['Recruit for 1000000 💎','Upgrade for 1200000 💎','Upgrade for 1560000 💎','Upgrade for 2000000 💎','Upgrade for 2500000 💎','Max Level Reached'];

  const L1upgrades = ['+ 41 💰 per Hr','+ 52 💰 per Hr','+ 65 💰 per Hr','+ 82 💰 per Hr','+ 103 💰 per Hr','Max Yield Reached'];
  const L2upgrades = ['+ 130 💰 per Hr','+ 157 💰 per Hr','+ 201 💰 per Hr','+ 264 💰 per Hr','+ 318 💰 per Hr','Max Yield Reached'];
  const L3upgrades = ['+ 339 💰 per Hr','+ 498 💰 per Hr','+ 625 💰 per Hr','+ 780 💰 per Hr','+ 995 💰 per Hr','Max Yield Reached'];
  const L4upgrades = ['+ 1220 💰 per Hr','+ 1530 💰 per Hr','+ 1920 💰 per Hr','+ 2380 💰 per Hr','+ 3050 💰 per Hr','Max Yield Reached'];
  const L5upgrades = ['+ 3750 💰 per Hr','+ 4700 💰 per Hr','+ 5900 💰 per Hr','+ 7400 💰 per Hr','+ 9300 💰 per Hr','Max Yield Reached'];
  const L6upgrades = ['+ 11400 💰 per Hr','+ 14300 💰 per Hr','+ 17900 💰 per Hr','+ 22700 💰 per Hr','+ 28700 💰 per Hr','Max Yield Reached'];
  const L7upgrades = ['+ 36200 💰 per Hr','+ 45500 💰 per Hr','+ 57200 💰 per Hr','+ 72500 💰 per Hr','+ 91500 💰 per Hr','Max Yield Reached'];
  const L8upgrades = ['+ 10400 💰 per Hr','+ 126500 💰 per Hr','+ 167000 💰 per Hr','+ 216500 💰 per Hr','+ 275000 💰 per Hr','Max Yield Reached'];

  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const signer = provider.getSigner()
  const contractAddress = '0x1C2c51CB9b979564EcFD09658277B7D84b74eAfc';
  const ABI = '[{"inputs":[{"internalType":"address","name":"ref","type":"address"}],"name":"addDiamonds","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"collectMoneyBags","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"gangs","outputs":[{"internalType":"uint256","name":"diamonds","type":"uint256"},{"internalType":"uint256","name":"moneybags","type":"uint256"},{"internalType":"uint256","name":"moneybags2","type":"uint256"},{"internalType":"uint256","name":"yield","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"hrs","type":"uint256"},{"internalType":"address","name":"ref","type":"address"},{"internalType":"uint256","name":"refs","type":"uint256"},{"internalType":"uint256","name":"refDeps","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"getLevels","outputs":[{"internalType":"uint8[8]","name":"","type":"uint8[8]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"manager","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"sellGang","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalGangs","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalInvested","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalLevels","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"gangsterId","type":"uint256"}],"name":"upgradeGang","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawMoneyBags","outputs":[],"stateMutability":"nonpayable","type":"function"}]';  
  const contract = new ethers.Contract(contractAddress, ABI, signer);
  const player = signer.getAddress();

  useEffect(() => {

    const getPWallet = async () => {
      const playerwallet = await signer.getAddress();
      setPWallet(playerwallet.toString());
    }

    const getTowerF1 = async () => {
      const result = await contract.getLevels(player);
      const {0: towerF1} = result;
      setTowerF1(towerF1.toString());
    }

    const getTowerF2 = async () => {
      const result = await contract.getLevels(player);
      const {1: towerF2} = result;
      setTowerF2(towerF2.toString());
    }

    const getTowerF3 = async () => {
      const result = await contract.getLevels(player);
      const {2: towerF3} = result;
      setTowerF3(towerF3.toString());
    }

    const getTowerF4 = async () => {
      const result = await contract.getLevels(player);
      const {3: towerF4} = result;
      setTowerF4(towerF4.toString());
    }

    const getTowerF5 = async () => {
      const result = await contract.getLevels(player);
      const {4: towerF5} = result;
      setTowerF5(towerF5.toString());
    }

    const getTowerF6 = async () => {
      const result = await contract.getLevels(player);
      const {5: towerF6} = result;
      setTowerF6(towerF6.toString());
    }

    const getTowerF7 = async () => {
      const result = await contract.getLevels(player);
      const {6: towerF7} = result;
      setTowerF7(towerF7.toString());
    }

    const getTowerF8 = async () => {
      const result = await contract.getLevels(player);
      const {7: towerF8} = result;
      setTowerF8(towerF8.toString());
    }

    const getTChefs = async () => {
      const countchefs = await contract.totalLevels();
      setTChefs(countchefs.toString());
    }

    const getTTowers = async () => {
      const counttowers = await contract.totalGangs();
      setTTowers(counttowers.toString());
    }

    const getPartners = async () => {
      const result = await contract.gangs(player);
      const {7: countpartners} = result;
      setPartners(countpartners.toString());
    }

    const getPartnerDeps = async () => {
      const result = await contract.gangs(player);
      const {8: countpartnerdeps} = result;
      setPartnerDeps(countpartnerdeps.toString());
    }

    const getCoins = async () => {
      const result = await contract.gangs(player);
      const {0: countcoins} = result;
      setCoins(countcoins.toString());
    }

    const getMoney = async () => {
      const result = await contract.gangs(player);
      const {1: countmoney} = result;
      setMoney(countmoney.toString());
    }

    const getPMoney = async () => {
      const result = await contract.gangs(player);
      const {4: temptimestamp, 3: tempyield} = result;
      var now = parseInt(Date.now().toString().substring(0,10));
      var claimable = 0;
      if (((now/3600)-(temptimestamp/3600)) < 1){
        claimable = 0;
      } else if(((now/3600)-(temptimestamp/3600)) > 24){
        claimable = 24 * tempyield;
      } else {
        claimable = Math.ceil((now/3600)-(temptimestamp/3600)-1) * tempyield;
      }
      setPMoney(claimable.toString());
    }

    const getPTimestamp = async () => {
      const result = await contract.gangs(player);
      const {4: countptimestamp} = result;
      setPTimestamp(countptimestamp.toString());
    }

    const getYMoney = async () => {
      const result = await contract.gangs(player);
      const {3: countymoney} = result;
      setYMoney(countymoney.toString());
    }

    const getBalance = async () => {
      const balance = await provider.getBalance(contractAddress);
      setBalance(ethers.utils.formatEther(balance));
    }

    const getWBalance = async () => {
      const wbalance = await signer.getBalance();
      setWBalance(ethers.utils.formatEther(wbalance));
    }

    getBalance().catch(console.error)
    getWBalance().catch(console.error)
    getTChefs().catch(console.error)
    getTTowers().catch(console.error)
    getPartners().catch(console.error)
    getPartnerDeps().catch(console.error)
    getCoins().catch(console.error)
    getMoney().catch(console.error)
    getPWallet().catch(console.error)
    getTowerF1().catch(console.error)
    getTowerF2().catch(console.error)
    getTowerF3().catch(console.error)
    getTowerF4().catch(console.error)
    getTowerF5().catch(console.error)
    getTowerF6().catch(console.error)
    getTowerF7().catch(console.error)
    getTowerF8().catch(console.error)
    getPMoney().catch(console.error)
    getPTimestamp().catch(console.error)
    getYMoney().catch(console.error)
  }, [])

  window.ethereum.on('accountsChanged', async () => {
    window.location.reload(true);
  });

  window.ethereum.on('chainChanged', async () => {
    window.location.reload(true);
  });

  async function connectToMetamask() {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const accounts = await provider.send("eth_requestAccounts", []);
    this.setState({ selectedAddress: accounts[0] })
  }
 
  const handleDepositChange = (e) => {
    setDepositValue(e.target.value)
  }

  const handleReferralChange = (e) => {
    setReferralValue(e.target.value);
  }

  const handleDepositSubmit = async (e) => {
    if (wbalance > depositValue && referralValue !== "")
    {
      e.preventDefault();
      const options = {value: ethers.utils.parseEther(depositValue)}
      const deposit = await contract.addDiamonds(referralValue, options);
      await deposit.wait();
      const balance = await provider.getBalance(contractAddress);
      setBalance(ethers.utils.formatEther(balance));
      window.location.reload(true);
    }
    else {
      alert("Insufficient BNB Balance or Empty Referral Address!");
    }
  }

  const handleF1Upgrade = async (e) => {
    if (towerF1 < 6 && countcoins >= pF1upgrades[towerF1])
    {
      e.preventDefault();
      const upgrade = await contract.upgradeGang(0);
      await upgrade.wait();
      window.location.reload(true);
    }
    else {
      alert("Insufficient 💎 or Max Level Reached!");
    }
  }

  const handleF2Upgrade = async (e) => {
    if (towerF2 < 6 && countcoins >= pF2upgrades[towerF2])
    {
      e.preventDefault();
      const upgrade = await contract.upgradeGang(1);
      await upgrade.wait();
      window.location.reload(true);
    }
    else {
      alert("Insufficient 💎 or Max Level Reached!");
    }
  }

  const handleF3Upgrade = async (e) => {
    if (towerF3 < 6 && countcoins >= pF3upgrades[towerF3])
    {
      e.preventDefault();
      const upgrade = await contract.upgradeGang(2);
      await upgrade.wait();
      window.location.reload(true);
    }
    else {
      alert("Insufficient 💎 or Max Level Reached!");
    }
  }

  const handleF4Upgrade = async (e) => {
    if (towerF4 < 6 && countcoins >= pF4upgrades[towerF4])
    {
      e.preventDefault();
      const upgrade = await contract.upgradeGang(3);
      await upgrade.wait();
      window.location.reload(true);
    }
    else {
      alert("Insufficient 💎 or Max Level Reached!");
    }
  }

  const handleF5Upgrade = async (e) => {
    if (towerF5 < 6 && countcoins >= pF5upgrades[towerF5])
    {
      e.preventDefault();
      const upgrade = await contract.upgradeGang(4);
      await upgrade.wait();
      window.location.reload(true);
    }
    else {
      alert("Insufficient 💎 or Max Level Reached!");
    }
  }

  const handleF6Upgrade = async (e) => {
    if (towerF6 < 6 && countcoins >= pF6upgrades[towerF6])
    {
      e.preventDefault();
      const upgrade = await contract.upgradeGang(5);
      await upgrade.wait();
      window.location.reload(true);
    }
    else {
      alert("Insufficient 💎 or Max Level Reached!");
    }
  }

  const handleF7Upgrade = async (e) => {
    if (towerF7 < 6 && countcoins >= pF7upgrades[towerF7])
    {
      e.preventDefault();
      const upgrade = await contract.upgradeGang(6);
      await upgrade.wait();
      window.location.reload(true);
    }
    else {
      alert("Insufficient 💎 or Max Level Reached!");
    }
  }

  const handleF8Upgrade = async (e) => {
    if (towerF8 < 6 && countcoins >= pF8upgrades[towerF8])
    {
      e.preventDefault();
      const upgrade = await contract.upgradeGang(7);
      await upgrade.wait();
      window.location.reload(true);
    }
    else {
      alert("Insufficient 💎 or Max Level Reached!");
    }
  }

  const handleSellTower = async (e) => {
    if (countymoney > 0)
    {
      e.preventDefault();
      const sellaction = await contract.sellGang();
      await sellaction.wait();
      window.location.reload(true);
    }
    else {
      alert("You have no Gang to sell!");
    }
  }

  const handleWithdraw = async (e) => {
    if (countmoney > 0)
    {
      e.preventDefault();
      const withdrawaction = await contract.withdrawMoneyBags();
      await withdrawaction.wait();
      window.location.reload(true);
    }
    else {
      alert("You have no MoneyBags 💰 to withdraw!");
    }
  }

  const handleCollect = async (e) => {
    if (countpmoney > 0)
    {
      e.preventDefault();
      const collectaction = await contract.collectMoneyBags();
      await collectaction.wait();
      window.location.reload(true);
    }
    else {
      alert("You have nothing left to collect!");
    }
  }
  return (

    <div className="container">
      <div className="jumbotron">
  <h1 className="display-4">Hello, Boss💀!</h1>
  <p className="lead">Become a true Gang Boss by starting Gangs and hiring Gangsters!<br/>With a <kbd>daily ROI starting at 2% upto 2.57%</kbd>, your Gangs will earn you <kbd>passive BNB income everyday 🚀</kbd>!</p>
  <hr className="my-4"></hr>
  <p>Connect your Wallet to get started or join our Telegram Community to learn more.</p>
  <p className="lead">
    <div className="btn btn-primary" id="connectButton" onClick={connectToMetamask} role="button">🔥 Connect Wallet</div>&nbsp;
    <a className="btn btn-primary" href="https://t.me/spacebarlounge" role="button">💬 Join Telegram</a>
  </p>
</div>
      <div className="row">
    <div className="col-sm my-3 p-5 stats">
    <h4>Game Stats</h4>
          <label><strong>Game Contract:</strong></label><br/>
          <input disabled type="text" className="form-control" value={contractAddress} /><br/>
          <p><strong>Vault:</strong> <button className="btn btn-sm btn-success">{balance}</button> BNB</p>
          <p><strong>Total Gangs:</strong> <button className="btn btn-sm btn-danger">{counttowers}</button> Gangs on BSC</p>
          <p><strong>Total Gangsters:</strong> <button className="btn btn-sm btn-danger">{countchefs}</button> Gangsters Hired</p>
    </div>
    <div className="col-sm my-3 p-5 stats">
    <h4>Buy Diamonds 💎</h4>
    <label>Enter BNB: (Wallet Balance: {wbalance} BNB)</label>
            <form onSubmit={handleDepositSubmit}>
              <div className="input-group mb-3">
                <input type="text" className="form-control" onChange={handleDepositChange} value={depositValue} placeholder="Enter BNB Value"></input>
                <div className="input-group-append">
                  <span className="input-group-text" id="basic-addon2">BNB | {depositValue * 50000} 💎</span>
                </div>
              </div>
              <div className="mb-3">
                <label>Referral Address:</label>
                <input type="text" className="form-control" placeholder={playerwallet} onChange={handleReferralChange} value={referralValue} />
                <small>Note: Enter your own wallet address if you do not have a Referral.</small>
              </div>
              <button type="submit" className="btn btn-sm btn-primary">Buy {depositValue * 50000} 💎 for {depositValue} BNB</button>
            </form>
    </div>
  </div>
  <div className="row">
    <div className="col-sm my-3 p-5 dash">
    <h4>Player Stats</h4>
          <p><strong>Your Diamonds:</strong> {countcoins} 💎</p>
          <p><strong>Your MoneyBags:</strong> {countmoney} 💰 <button type="submit" onClick={handleWithdraw} className="btn btn-sm btn-success">Withdraw {countmoney / 5000000} BNB</button></p>
          <p><strong>Your Gang Revenue:</strong> {countymoney} 💰 per Hr</p>
          <p><strong>Your Pending MoneyBags:</strong> {countpmoney} 💰 <button type="submit" onClick={handleCollect} className="btn btn-sm btn-warning">Collect {countpmoney} 💰</button></p>
          <p><strong>Last MoneyBags Collected:</strong> {countpmoney/countymoney} Hrs Ago (UNIX: {countptimestamp})</p>
          <h4>Referrals</h4>
          <p>You will earn <kbd>7% in Diamonds 💎 and 3% in MoneyBags 💰</kbd> from the deposit of each invited Player!</p>
          <p><strong>Your Referrals:</strong> {countpartners} 👥</p>
          <p><strong>Referral Diamonds:</strong> {Math.ceil(countpartnerdeps * 7 / 100)} 💎</p>
          <p><strong>Referral MoneyBags:</strong> {Math.ceil(countpartnerdeps * 100 * 3 / 100)} 💰</p>
          <label><strong>Referral Address:</strong></label><br/>
          <input disabled type="text" className="form-control" value={playerwallet} />
          <small>Note: Your wallet address is your Referral Address.</small><br/><br/>
          <h4>Reset Game</h4>
          <p>Sell your Gang and collect back all Money 💰 to restart or end the game.</p>
          <button type="submit" onClick={handleSellTower} className="btn btn-sm btn-danger">Sell Gang for {countymoney * 24 * 14} 💰</button>
    </div>
    <div className="col-sm my-3 p-5 dash">
    <h4>How To Play</h4>
      <p>
        Get started by buying some Diamonds 💎 using BNB. Diamonds can be used to Recruit Gangsters and Upgrade them.<br/><br/>
        Gangsters work and earn you MoneyBags 💰 every hour. Each Gangster has 5 Levels of upgrades which increases their Revenue.<br/><br/>
        MoneyBags 💰 can be exchanged for BNB at anytime without any taxes/fees.<br/><br/>
        Be sure to collect your MoneyBags 💰 everyday without fail or the Gangsters might splurge on it. Bigger Gangsters generate more MoneyBags 💰.<br/><br/>
        You can refer other Players using your Wallet Address as the Referral Address and receive <strong>7% in Diamonds 💎 and 3% in MoneyBags 💰</strong> from the deposit of each invited Player!<br/><br/>
        You can end the Game at any point by selling your Gang for MoneyBags 💰 which can be withdrawn as BNB later. You will stop receiving Passive Income after selling your Gang.<br/><br/>
        <div className="alert alert-warning" role="alert">
          <h6><strong>⛔️ Warning</strong></h6>
          Unlike other P2E Farming Games, this is not a "deposit & forget" game! To ensure sustainability & longetivity, players must collect their Gang Revenue everyday. All Gang Revenue is capped at 24 Hours so you will not earn further if you do not collect your Pending MoneyBags 💰 daily!
        </div>  
      </p>      
    </div>
  </div>
  <div className="row">
    <div className="col-sm my-3 p-5 alert alert-danger">
      <center>
      <img src="./avatar.jpg" alt="avatar" className="rounded-circle mb-3 avatar"/>
      <h5 className="mb-2"><strong>Tate</strong></h5>
      <p className="text-muted">Drug Peddler <span className="badge bg-primary">Level {towerF1}</span></p>
      </center>
      <p><strong>🏴‍☠️ Level:</strong> {towerF1}/5<br/>
      <strong>🏴‍☠️ ROI:</strong> 2.01% per Day</p>
      <h5>Upgrade Gangster</h5>
      <p>Upgrade Gangster to earn more MoneyBags 💰 from them.</p>
      <p><button type="submit" onClick={handleF1Upgrade} className="btn btn-sm btn-success">{F1upgrades[towerF1]}</button>
      <br/><small>{L1upgrades[towerF1]}</small></p>
      <h5>Profitability</h5>
                <p>
                <strong>Lvl 1</strong> - 41 💰 per Hr<br/>
                <strong>Lvl 2</strong> - 93 💰 per Hr<br/>
                <strong>Lvl 3</strong> - 158 💰 per Hr<br/>
                <strong>Lvl 4</strong> - 240 💰 per Hr<br/>
                <strong>Lvl 5</strong> - 343 💰 per Hr<br/>
                <br/>
                At Lvl 5, Tate will earn:<br/><kbd>0.0016464 BNB per Day</kbd><br/><kbd>0.049392 BNB per Month</kbd><br/><kbd>0.592704 BNB per Year</kbd><br/>
                
                <br/></p>
    </div>
    <div className="col-sm my-3 p-5 alert alert-danger">
      <center>
      <img src="./avatar.jpg" alt="avatar"  className="rounded-circle mb-3 avatar"/>
      <h5 className="mb-2"><strong>Jesse</strong></h5>
      <p className="text-muted">Getaway Driver <span className="badge bg-primary">Level {towerF2}</span></p>
      </center>
      <p><strong>🏴‍☠️ Level:</strong> {towerF2}/5<br/>
      <strong>🏴‍☠️ ROI:</strong> 2.1% per Day</p>
      <h5>Upgrade Gangster</h5>
      <p>Upgrade Gangster to earn more MoneyBags 💰 from them.</p>
      <p><button type="submit" onClick={handleF2Upgrade} className="btn btn-sm btn-success">{F2upgrades[towerF2]}</button>
      <br/><small>{L2upgrades[towerF2]}</small></p>
      <h5>Profitability</h5>
                <p>
                <strong>Lvl 1</strong> - 130 💰 per Hr<br/>
                <strong>Lvl 2</strong> - 287 💰 per Hr<br/>
                <strong>Lvl 3</strong> - 488 💰 per Hr<br/>
                <strong>Lvl 4</strong> - 752 💰 per Hr<br/>
                <strong>Lvl 5</strong> - 1070 💰 per Hr<br/>
                <br/>
                At Lvl 5, Jesse will earn:<br/><kbd>0.005136 BNB per Day</kbd><br/><kbd>0.15408 BNB per Month</kbd><br/><kbd>1.84896 BNB per Year</kbd><br/>
                <br/></p>
    </div>
    <div className="col-sm my-3 p-5 alert alert-danger">
      <center>
      <img src="./avatar.jpg" alt="avatar"  className="rounded-circle mb-3 avatar"/>
      <h5 className="mb-2"><strong>Gotti</strong></h5>
      <p className="text-muted">Gunman <span className="badge bg-primary">Level {towerF3}</span></p>
      </center>
      <p><strong>🏴‍☠️ Level:</strong> {towerF3}/5<br/>
      <strong>🏴‍☠️ ROI:</strong> 2.15% per Day</p>
      <h5>Upgrade Gangster</h5>
      <p>Upgrade Gangster to earn more MoneyBags 💰 from them.</p>
      <p><button type="submit" onClick={handleF3Upgrade} className="btn btn-sm btn-success">{F3upgrades[towerF3]}</button>
      <br/><small>{L3upgrades[towerF3]}</small></p>
      <h5>Profitability</h5>
                <p>
                <strong>Lvl 1</strong> - 399 💰 per Hr<br/>
                <strong>Lvl 2</strong> - 897 💰 per Hr<br/>
                <strong>Lvl 3</strong> - 1522 💰 per Hr<br/>
                <strong>Lvl 4</strong> - 2302 💰 per Hr<br/>
                <strong>Lvl 5</strong> - 3297 💰 per Hr<br/>
                <br/>
                At Lvl 5, Gotti will earn:<br/><kbd>0.0158256 BNB per Day</kbd><br/><kbd>0.474768 BNB per Month</kbd><br/><kbd>5.697216 BNB per Year</kbd><br/>
                <br/></p>
    </div>
    <div className="col-sm my-3 p-5 alert alert-danger">
      <center>
      <img src="./avatar.jpg" alt="avatar"  className="rounded-circle mb-3 avatar"/>
      <h5 className="mb-2"><strong>Bumpy</strong></h5>
      <p className="text-muted">Explosives <span className="badge bg-primary">Level {towerF4}</span></p>
      </center>
      <p><strong>🏴‍☠️ Level:</strong> {towerF4}/5<br/>
      <strong>🏴‍☠️ ROI:</strong> 2.19% per Day</p>
      <h5>Upgrade Gangster</h5>
      <p>Upgrade Gangster to earn more MoneyBags 💰 from them.</p>
      <p><button type="submit" onClick={handleF4Upgrade} className="btn btn-sm btn-success">{F4upgrades[towerF4]}</button>
      <br/><small>{L4upgrades[towerF4]}</small></p>
      <h5>Profitability</h5>
                <p>
                <strong>Lvl 1</strong> - 1.22K 💰 per Hr<br/>
                <strong>Lvl 2</strong> - 2.75K 💰 per Hr<br/>
                <strong>Lvl 3</strong> - 4.67K 💰 per Hr<br/>
                <strong>Lvl 4</strong> - 7.05K 💰 per Hr<br/>
                <strong>Lvl 5</strong> - 10.1K 💰 per Hr<br/>
                <br/>
                At Lvl 5, Bumpy will earn:<br/><kbd>0.04848 BNB per Day</kbd><br/><kbd>1.4544 BNB per Month</kbd><br/><kbd>17.4528 BNB per Year</kbd><br/>
                <br/></p>
    </div>
  </div>
  <div className="row">
    <div className="col-sm my-3 p-5 alert alert-danger">
      <center>
      <img src="./avatar.jpg" alt="avatar" className="rounded-circle mb-3 avatar"/>
      <h5 className="mb-2"><strong>Wolff</strong></h5>
      <p className="text-muted">Accountant <span className="badge bg-primary">Level {towerF5}</span></p>
      </center>
      <p><strong>🏴‍☠️ Level:</strong> {towerF5}/5<br/>
      <strong>🏴‍☠️ ROI:</strong> 2.24% per Day</p>
      <h5>Upgrade Gangster</h5>
      <p>Upgrade Gangster to earn more MoneyBags 💰 from them.</p>
      <p><button type="submit" onClick={handleF5Upgrade} className="btn btn-sm btn-success">{F5upgrades[towerF5]}</button>
      <br/><small>{L5upgrades[towerF5]}</small></p>
      <h5>Profitability</h5>
                <p>
                <strong>Lvl 1</strong> - 3.75K 💰 per Hr<br/>
                <strong>Lvl 2</strong> - 8.45K 💰 per Hr<br/>
                <strong>Lvl 3</strong> - 14.35K 💰 per Hr<br/>
                <strong>Lvl 4</strong> - 21.75K 💰 per Hr<br/>
                <strong>Lvl 5</strong> - 31.05K 💰 per Hr<br/>
                <br/>
                At Lvl 5, Wolff will earn:<br/><kbd>0.14904 BNB per Day</kbd><br/><kbd>4.4712 BNB per Month</kbd><br/><kbd>53.6544 BNB per Year</kbd><br/>
                
                <br/></p>
    </div>
    <div className="col-sm my-3 p-5 alert alert-danger">
      <center>
      <img src="./avatar.jpg" alt="avatar"  className="rounded-circle mb-3 avatar"/>
      <h5 className="mb-2"><strong>Bonnie</strong></h5>
      <p className="text-muted">Heists <span className="badge bg-primary">Level {towerF6}</span></p>
      </center>
      <p><strong>🏴‍☠️ Level:</strong> {towerF6}/5<br/>
      <strong>🏴‍☠️ ROI:</strong> 2.31% per Day</p>
      <h5>Upgrade Gangster</h5>
      <p>Upgrade Gangster to earn more MoneyBags 💰 from them.</p>
      <p><button type="submit" onClick={handleF6Upgrade} className="btn btn-sm btn-success">{F6upgrades[towerF6]}</button>
      <br/><small>{L6upgrades[towerF6]}</small></p>
      <h5>Profitability</h5>
                <p>
                <strong>Lvl 1</strong> - 11.4K 💰 per Hr<br/>
                <strong>Lvl 2</strong> - 25.7K 💰 per Hr<br/>
                <strong>Lvl 3</strong> - 43.6K 💰 per Hr<br/>
                <strong>Lvl 4</strong> - 66.3K 💰 per Hr<br/>
                <strong>Lvl 5</strong> - 95K 💰 per Hr<br/>
                <br/>
                At Lvl 5, Bonnie will earn:<br/><kbd>0.456 BNB per Day</kbd><br/><kbd>13.68 BNB per Month</kbd><br/><kbd>164.16 BNB per Year</kbd><br/>
                <br/></p>
    </div>
    <div className="col-sm my-3 p-5 alert alert-danger">
      <center>
      <img src="./avatar.jpg" alt="avatar"  className="rounded-circle mb-3 avatar"/>
      <h5 className="mb-2"><strong>Clyde</strong></h5>
      <p className="text-muted">Exports <span className="badge bg-primary">Level {towerF7}</span></p>
      </center>
      <p><strong>🏴‍☠️ Level:</strong> {towerF7}/5<br/>
      <strong>🏴‍☠️ ROI:</strong> 2.42% per Day</p>
      <h5>Upgrade Gangster</h5>
      <p>Upgrade Gangster to earn more MoneyBags 💰 from them.</p>
      <p><button type="submit" onClick={handleF7Upgrade} className="btn btn-sm btn-success">{F7upgrades[towerF7]}</button>
      <br/><small>{L7upgrades[towerF7]}</small></p>
      <h5>Profitability</h5>
                <p>
                <strong>Lvl 1</strong> - 36.2K 💰 per Hr<br/>
                <strong>Lvl 2</strong> - 81.7K 💰 per Hr<br/>
                <strong>Lvl 3</strong> - 138.9K 💰 per Hr<br/>
                <strong>Lvl 4</strong> - 211.4K 💰 per Hr<br/>
                <strong>Lvl 5</strong> - 302.9K 💰 per Hr<br/>
                <br/>
                At Lvl 5, Clyde will earn:<br/><kbd>1.45392 BNB per Day</kbd><br/><kbd>43.6176 BNB per Month</kbd><br/><kbd>523.4112 BNB per Year</kbd><br/>
                <br/></p>
    </div>
    <div className="col-sm my-3 p-5 alert alert-danger">
      <center>
      <img src="./avatar.jpg" alt="avatar"  className="rounded-circle mb-3 avatar"/>
      <h5 className="mb-2"><strong>Pablo</strong></h5>
      <p className="text-muted">Mastermind <span className="badge bg-primary">Level {towerF8}</span></p>
      </center>
      <p><strong>🏴‍☠️ Level:</strong> {towerF8}/5<br/>
      <strong>🏴‍☠️ ROI:</strong> 2.57% per Day</p>
      <h5>Upgrade Gangster</h5>
      <p>Upgrade Gangster to earn more MoneyBags 💰 from them.</p>
      <p><button type="submit" onClick={handleF8Upgrade} className="btn btn-sm btn-success">{F8upgrades[towerF8]}</button>
      <br/><small>{L8upgrades[towerF8]}</small></p>
      <h5>Profitability</h5>
                <p>
                <strong>Lvl 1</strong> - 104K 💰 per Hr<br/>
                <strong>Lvl 2</strong> - 230.5K 💰 per Hr<br/>
                <strong>Lvl 3</strong> - 397.5K 💰 per Hr<br/>
                <strong>Lvl 4</strong> - 614K 💰 per Hr<br/>
                <strong>Lvl 5</strong> - 889K 💰 per Hr<br/>
                <br/>
                At Lvl 5, Pablo will earn:<br/><kbd>4.2672 BNB per Day</kbd><br/><kbd>128.016 BNB per Month</kbd><br/><kbd>1536.192 BNB per Year</kbd><br/>
                <br/></p>
    </div>
    <div className="jumbotron">
  <hr className="my-4"></hr>
  <p><strong>Disclaimer:</strong> This game operates completely on the Blockchain and <strong>requires no human-intervention for operation</strong>. There are <strong>no Admins or Admin Privileges in the contract</strong>. Funds in the Game Vault cannot be accessed by anyone including the deployer. Contract for the game is open-source and verified and can be viewed below:</p>
  <p className="lead">
    <a className="btn btn-primary" href="https://bscscan.com/address/0x1c2c51cb9b979564ecfd09658277b7d84b74eafc#code" role="button">📑 View Contract on BSCScan</a>
  </p>
</div>
  </div>
      </div>
  );
}

export default App;