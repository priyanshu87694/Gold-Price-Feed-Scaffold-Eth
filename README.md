# Gold Price Feed using Scaffold ETH

You must have a [metamask](https://metamask.io/) wallet and some `Goerli` tokens to test this app.
* Create and get started with meta mask
* Get some `Goerli` eth from [Goerli Faucet](https://goerlifaucet.com/)
* Get some `Link` toke as well to fund the contract so it can make api calls - [Chainlink Faucet](https://faucets.chain.link)

## Introduction

This contract fetchs the latest price of the gold from `metals-api.com` per ounce in terms of USD and displays it to the user.

## Getting Started

* clone this repo
* install all the packeges - `yarn install`

## Working

Get the local hardhat chain to run 

```
yarn chain
```

or we can ignore it because this app needs user to run on `Goerli`

```
yarn start
```

```
yarn deploy --tags goldPriceFeed --network goerli
```

After deployin the contract don't forget to fund it with the `LINK` token
Copy the address showing the front end as "Your Contract Address:"

![ScreentShot](screenshot.png)