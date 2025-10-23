import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers";

// This is your CheckIn contract deploy script
// Update with the deployed BatchRegistry address (for local or Arbitrum test)
const BATCH_REGISTRY_ADDRESS = "0x23E4943145668C06B55Bbc7cDEEEc6353687305B"; // Arbitrum address

const deployCheckIn: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  console.log("Deploying CheckIn contract with deployer:", deployer);

  await deploy("CheckIn", {
    from: deployer,
    args: [BATCH_REGISTRY_ADDRESS], // pass BatchRegistry address here
    log: true,
    autoMine: true, // for local network
  });

  const checkInContract = await hre.ethers.getContract<Contract>("CheckIn", deployer);
  console.log("CheckIn contract deployed to:", await checkInContract.getAddress());
};

export default deployCheckIn;
deployCheckIn.tags = ["CheckIn"];
