import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

/**
 * Deploys a contract named "YourContract" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployYourContract: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  /*
    On localhost, the deployer account is the one that comes with Hardhat, which is already funded.

    When deploying to live networks (e.g `yarn deploy --network sepolia`), the deployer account
    should have sufficient balance to pay for the gas fees for contract creation.

    You can generate a random account with `yarn generate` which will fill DEPLOYER_PRIVATE_KEY
    with a random private key in the .env file (then used on hardhat.config.ts)
    You can run the `yarn account` command to check your balance in every network.
  */
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  await deploy("Faucet", {
    from: deployer,
    // Contract constructor arguments
    args: [
      [
      "0x4b4953FC1D985333E34Fe65Ceb985BeC3d703227",
      "0xE2A9c5427BDf96F206886742DD930154A8eB1b04",
      "0x4009a7E70e45889082da81204AFDb69CB0259f35",
      "0x12cA64475BA6F1F2d3bd535E047c577195a24Dce",
      "0x60C3E9b34C9C51279f94A59bFc46eB2E066a75f1",
      "0xa2Ea59Ad9bF06F2a31F4DA2C847657582cdB0Adb",
      "0x3624fBcb64Db0e91cA4244fe19EFb6C9c20ec49a",
      "0xdC4AE3B509723B9D3A01a81c1b377e597bb008d3",
      "0x8fa5B9265E3Fbe770b9889DcE7e2dFA085D41823",
      "0xf73A7F55ED244EE600F1c2252F8A4014dcC52d48",
      "0x03F01F4FddD63DC18069F2337a874Ec7Ae3352E6"
      ]
    ],
    log: true,
    // autoMine: can be passed to the deploy function to make the deployment process faster on local networks by
    // automatically mining the contract deployment transaction. There is no effect on live networks.
    autoMine: true,
    // value: parseEther("0.5").toString(),
  });

  // Get the deployed contract to interact with it after deploying.
  // const yourContract = await hre.ethers.getContract<Contract>("YourContract", deployer);
  // console.log("👋 Initial greeting:", await yourContract.greeting());
};

export default deployYourContract;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags YourContract
deployYourContract.tags = ["Faucet"];
