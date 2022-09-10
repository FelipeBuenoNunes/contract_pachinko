import { ethers } from "hardhat";

/*
  Account #19: 0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199 (10000 ETH)
  Private Key: 0xdf57089febbacf7ba0bc227dafbffa9fc08a93fdc68e1e42411a14efcf23656e
*/

async function main() {
  const provider = new ethers.providers.JsonRpcProvider();
  const ownerSigner = new ethers.Wallet("0xdf57089febbacf7ba0bc227dafbffa9fc08a93fdc68e1e42411a14efcf23656e", provider)
  const Tochinko = await ethers.getContractFactory("Tochinko", ownerSigner);
  const tochinko = await Tochinko.deploy();
  await tochinko.deployed();

  console.log(`Deployed with success: ${tochinko.address}`)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
