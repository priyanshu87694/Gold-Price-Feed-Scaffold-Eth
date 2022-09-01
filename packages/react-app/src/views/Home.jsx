import { Button, Divider } from "antd"
import { useContractReader } from "eth-hooks";
import { ethers } from "ethers";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Address, Balance, Events } from "../components";
import { utils } from "ethers"

/**
 * web3 props can be passed from '../App.jsx' into your local view component for use
 * @param {*} yourLocalBalance balance on current network
 * @param {*} readContracts contracts from current chain already pre-loaded using ethers contract module. More here https://docs.ethers.io/v5/api/contract/contract/
 * @returns react component
 **/
function Home({ tx, address, yourLocalBalance, localProvider, price, readContracts, writeContracts, mainnetProvider}) {
  // you can also use hooks locally in your component of choice
  // in this case, let's keep track of 'purpose' variable from our contract
  // const purpose = useContractReader(readContracts, "YourContract", "purpose");
  const [currentPrice, setCurrentPrice] = useState()

  return (
      <div style={{ border: "1px solid #cccccc", padding: 16, width: 400, margin: "auto", marginTop: 64 }}>
        <h1>Gold Price Feed</h1>
        <Divider />
        <div>
          <Button onClick={async () => {
            const result = await tx(writeContracts.GoldPriceFeed.requestVolumeData())
            const goldPrice = await readContracts.GoldPriceFeed.getGoldPrice()
            setCurrentPrice(goldPrice.toString())
          }}>
            Update Price 📈
          </Button>
          <br /> <br />
          <div>
            1 USD 💵 = {currentPrice / 10000000} ounce of Gold
          </div>
        </div>
        <Divider/>
        <div>
          Your Address:
          <Address address={address} ensProvider={mainnetProvider} fontSize={16} />
        </div>
        <div>
          <h2>Your Balance: {yourLocalBalance ? utils.formatEther(yourLocalBalance) : "..."}</h2>
        </div>
        <div>
          OR
          <br/>
          💵<Balance address={address} provider={localProvider} price={price} />
        </div>
        <Divider />
        <div>
          Your Contract Address:
          <Address
            address={readContracts && readContracts.GoldPriceFeed ? readContracts.GoldPriceFeed.address : null}
            ensProvider={mainnetProvider}
            fontSize={16}
          />
        </div>
      </div>

  )
}

export default Home;
