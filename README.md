# Web3 - Ethers. js Plaground

This is a Node.js project in which we will explore the dynamics of ethers.js.

You can also run this project in codesandbox by launching the sandbox [here](https://codesandbox.io/s/github/laishawadhwa/Web3-Ethers-playground)

We'll be starting with first copying .env.local to .env and updating the following constants
PROVIDER_NETWORK=""
ALCHEMY_KEY=""

You can get the PROVDER_NETWORK (url) from any of the websites [Quicknode](https://www.quicknode.com/), [Infura](https://docs.infura.io/infura/networks/ethereum/how-to/secure-a-project/project-id) or [Alchemy](https://dashboard.alchemy.com/)


You can start by running the first script
```shell
node create_random_wallets.js
```

You'll get two accounts, update the following variables in the .env file from the outputs received.

PUBLIC_ADDRESS_1 = ""
PUBLIC_ADDRESS_2 = ""
PRIVATE_KEY_1 = ""
PRIVATE_KEY2 = ""

Next you can run get_balance.js and other utilties.
In order to test the create_erc20.js, transfer_token.js and trnasfer_erc_20.js, you'll need to ensure that the ERC20 contract's address you're using is 
updated in .env corresponding to the follwing variable
CONTRACT_ADDRESS=""

You can also listen to events associated with a given contrcat using ethers_listen_events.js
