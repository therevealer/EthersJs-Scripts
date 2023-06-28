const { ethers } = require("ethers");

// Goerli Testnet Info
const Alchemy_ID = "https://eth-goerli.g.alchemy.com/v2/ArNqVKwJgefMaNZ4GyuqCz-ZFnLHmxPd";
const provider = new ethers.providers.AlchemyProvider("goerli", Alchemy_ID);

const account1 = "0x08755B4d595AFA790d760CF499778f8ff610607E" // sender
const account2 = "0xb636a68f834b4d75af9edc5fb0138bb4758ed293" //reciever
const privateKey = ""

const wallet = new ethers.Wallet(privateKey, provider)



async function transaction() {
    const tx = await wallet.sendTransaction({
         to: account2 ,
         value: ethers.utils.parseEther("0.01")
        })

    //Wait for the transaction to be mined
        await tx.wait(console.log(tx))
}

transaction()