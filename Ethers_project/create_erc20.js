var ethers = require('ethers');  
var url = "https://wider-cosmopolitan-thunder.matic-testnet.discover.quiknode.pro/1231701c2f5f8c8462e99a96c5b7c4fa8d535bdd/";
const address = '0xE7d63A3920A021E9d0eEBf646F64C6ceE7E96Aa4';
const address2 = '0x2C208fBC380194c5d4ebF1038A7c8Ad089B24CFc';

var provider = new ethers.providers.JsonRpcProvider(url);
const privateKey = "0xaddd6678d4f581934e73905fbdb101f901132e314a04df6a01b8ab2d67eef6bb";
const privateKey2 = "0x563c250f7a999f1caf9db9ab2b9ba32f1c378741213a7bd89a1afea384342be4";

//Contract details
const artifact = require("./contracts/FT.json");
const initialBalance = ethers.utils.parseEther("10000.0");
const contractConstructorArgs = [initialBalance];

//Instantiations
const wallet = new ethers.Wallet(privateKey, provider);
const factory = new ethers.ContractFactory(artifact.abi, artifact.bytecode, wallet);
const amount = ethers.utils.parseUnits("100.0", 18);

//Create a new contract
  (async function () {
    const deployment = await factory.deploy(...contractConstructorArgs);
    const contract = await deployment.deployed();

    //You can now add the contract address to the .env file (ftAddress)
    console.log(`Success! You can now update your .env file: ftAddress=${contract.address}`);
    
    //You can inspect the token transfer activity on Etherscan 
    console.log(`https:///mumbai.polygonscan.com/address/${contract.address}`);

})();



