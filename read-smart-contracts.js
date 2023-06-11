const { ethers } = require("ethers");

const Alchemy_ID = "";
const provider = new ethers.providers.AlchemyProvider("homestead", Alchemy_ID);
const address = '0x6B175474E89094C44Da98b954EedeAC495271d0F'

const ERC20_ABI = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function totalSupply() view returns (uint256)",
    "function balanceOf(address) view returns (uint)",
];

const contract = new ethers.Contract( address, ERC20_ABI, provider )

async function get() {
    const name = await contract.name()
    const symbol = await contract.symbol()
    const totalSupply = await contract.totalSupply()
    const balance = await contract.balanceOf("0x6c6Bc977E13Df9b0de53b251522280BB72383700")

    console.log(`Name: ${name}`)
    console.log(`Symbol: ${symbol}`)
    console.log(`Total Supply: ${totalSupply}`)
    console.log(`Balance of User =  ${balance}`)
    console.log(`Formatted Balance = ${ethers.utils.formatEther(balance)} `)
}

get()