var ethers = require("ethers");
require("dotenv").config();
//Contract Details
const artifact = require("./contracts/FT.json");

//Instantiations
var url = process.env.PROVIDER_NETWORK;
// const address = process.env.PUBLIC_ADDRESS_1;
const address2 = process.env.PUBLIC_ADDRESS_2;

var provider = new ethers.providers.JsonRpcProvider(url);
const privateKey = process.env.PRIVATE_KEY_1;
const ftAddress = process.env.CONTRACT_ADDRESS; //"0xdC1A0eC7af9c4320751e2d215E23FEAEE9Ed7d29";

const wallet = new ethers.Wallet(privateKey, provider);
const contract = new ethers.Contract(ftAddress, artifact.abi, wallet);
const amount = ethers.utils.parseEther("0.00000001");

//Transfer a token from wallet holder (account1) to account2
(async function () {
  let recipient = address2;
  let transaction = await contract.transfer(recipient, amount);
  let result = await transaction.wait();

  //You can inspect transaction on Etherscan
  console.log(`https:///mumbai.polygonscan.com/tx/${result.transactionHash}`);

  //You can inspect the token transfer activity on Etherscan
  console.log(`https:///mumbai.polygonscan.com/address/${contract.address}`);

  //You can also inpect token balances on a single account
  console.log(
    `https:///mumbai.polygonscan.com/address/${contract.address}?a=${recipient}`
  );
})();
