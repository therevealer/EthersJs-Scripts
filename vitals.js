const { ethers } = require("ethers");
const contractABI = require('./contractABI.json');

const alchemyApiKey = '';
const providerUrl = `https://eth-sepolia.g.alchemy.com/v2/${alchemyApiKey}`;
const provider = new ethers.providers.JsonRpcProvider(providerUrl);


const privateKey = '';
const patientAddress = "0x6162cF7C5FA8A03B2a34728e84B1d01435e09354" 
const contractAddress = "0x6a0824a8e8858f6e41a617fc9fb45b76c90bba36"
// const deployer = "0x08755B4d595AFA790d760CF499778f8ff610607E"


const wallet = new ethers.Wallet(privateKey, provider);
const contract = new ethers.Contract(contractAddress, contractABI, wallet)

async function testScript(){

    const diseaseInfo = await contract.updateDiseaseInfo(
        patientAddress,
        ["diseases", "diseaseDetails", "doctorName", "patientID", "AppointmentID", "patientAddres"]
    );

    const medicalInfo = await contract.updateMedicationInfo(
        patientAddress,
        ["Patient getting stable", "Patient not ill", "xxxxx"]
    );

    const getRecords = await contract.getPatientRecords(patientAddress);
    
    console.log(getRecords)

}

testScript().catch(console.error);