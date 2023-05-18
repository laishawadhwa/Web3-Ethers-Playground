var ethers = require('ethers');  
var url = "https://wider-cosmopolitan-thunder.matic-testnet.discover.quiknode.pro/1231701c2f5f8c8462e99a96c5b7c4fa8d535bdd/";

var customHttpProvider = new ethers.providers.JsonRpcProvider(url);
customHttpProvider.getBlockNumber().then((result) => {
    console.log("Current block number: " + result);
});

const rawAccount1 = ethers.Wallet.createRandom();
const account1 = {address: rawAccount1.address, privateKey: rawAccount1.privateKey};
console.log(account1);

const rawAccount2 = ethers.Wallet.createRandom();
const account2 = {address: rawAccount2.address, privateKey: rawAccount2.privateKey};
console.log(account2);