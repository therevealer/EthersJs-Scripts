const { ethers } = require("ethers");

const Alchemy_ID = "";
const address = "0x08755B4d595AFA790d760CF499778f8ff610607E";


async function main() {
 const provider = new ethers.providers.AlchemyProvider("homestead", Alchemy_ID);

    try {
      const balance = await provider.getBalance(address);
      console.log("Account Balance: ", ethers.utils.formatEther(balance));
    } catch (error) {
      console.log("Error retreiving balance: ", error)
    }
  
}

main()