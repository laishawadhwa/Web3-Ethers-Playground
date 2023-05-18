const ethers = require("ethers");
const fs = require("fs");
const contractAbi = fs.readFileSync("usdc_abi.json").toString();
require("dotenv").config();

async function getTransfer() {
  const usdcAddress = "0xdAC17F958D2ee523a2206206994597C13D831ec7"; ///USDC Contract
  const provider = new ethers.providers.WebSocketProvider(
    `wss://eth-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_KEY}`
  );
  console.log("creating new contract evemtvent");
  const contract = new ethers.Contract(usdcAddress, contractAbi, provider);
  console.log("Done new contract event");
  // const filter = contract.filters.transfer(null, null, null)
  contract.on("Transfer", (from, to, value, event) => {
    let transferEvent = {
      from: from,
      to: to,
      value: ethers.utils.formatUnits(value, 6),
      data: event,
    };

    console.log(JSON.stringify(transferEvent, null, 4));
  });
}

getTransfer();
