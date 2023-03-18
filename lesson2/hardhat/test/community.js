const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Sign up to community", () => {
  it("When user calls signUp we need to write it to active Users", async () => {

  });
}



//it("When user calls signUp we need to write it to active Users", async () => {
  //   const USDT = await ethers.getContractFactory("USDT");
  //   const usdt = await USDT.deploy(1000000000);
  //   await usdt.deployed();
  //   const Community = await ethers.getContractFactory("Community");
  //   const community = await Community.deploy(usdt.address);
  //   await community.deployed();
  //   const [owner, account1, account2, account3, account4, account5] = await ethers.getSigners();
  //   const signUpTrx = await community.signIn();
  //   await signUpTrx.wait();
  //   // add validator
  //   const addValidatorTrx = await community.addValidator(account3.address);
  //   await addValidatorTrx.wait();
  //   const giveUSDTToAccount1Trx = await usdt.transfer(
  //     account1.address,
  //     20000000
  //   );
  //   await giveUSDTToAccount1Trx.wait();
  //   const giveUSDTToAccount2Trx = await usdt.transfer(
  //     account2.address,
  //     20000000
  //   );
  //   await giveUSDTToAccount2Trx.wait();
  //   // console.log(await community.Users(owner.address));
  //   const user = await community.Users(owner.address);
  //   expect(user.active).to.equal(true);
  //   expect(user.signed).to.equal(true);
  //   const addMatchTRX = await community.addMatch(
  //     "firstMatch",
  //     "command1",
  //     "command2",
  //     3,
  //     10000000
  //   );
  //   await addMatchTRX.wait();
  //   const Match = await community.Matches(1);
  //   expect(Match.name).to.equal("firstMatch");
  //   const approveTrx = await usdt.approve(community.address, 20000000);
  //   await approveTrx.wait();
  //   expect(await usdt.balanceOf(community.address)).to.equal(0);
  //   const makeBetTrx = await community.makeBet(1, 20000000, 1);
  //   await makeBetTrx.wait();
  //   expect(await usdt.balanceOf(community.address)).to.equal(20000000);
  //   // make bet from account1
  //   const approveUSDTAccount1 = await usdt
  //     .connect(account1)
  //     .approve(community.address, 20000000);
  //   await approveUSDTAccount1.wait();
  //   const makeBetAccount1 = await community
  //     .connect(account1)
  //     .makeBet(1, 20000000, 1);
  //   await makeBetAccount1.wait();
  //   expect(await usdt.balanceOf(community.address)).to.equal(40000000);
  //   // make bet from account2
  //   const approveUSDTAccount2 = await usdt
  //     .connect(account2)
  //     .approve(community.address, 20000000);
  //   await approveUSDTAccount2.wait();
  //   const makeBetAccount2 = await community
  //     .connect(account2)
  //     .makeBet(1, 20000000, 2);
  //   await makeBetAccount2.wait();
  //   expect(await usdt.balanceOf(community.address)).to.equal(60000000);
  //   const makeValidationTrx = await community
  //     .connect(account3)
  //     .Validate(1, 3, 5);
  //   await makeValidationTrx.wait();
  //   const match = await community.Matches(1);
  //   expect(match.totalBetAmountPart1).to.equal(40000000);
  //   expect(match.totalBetAmountPart2).to.equal(20000000);
  //   expect(await usdt.balanceOf(account1.address)).to.equal(0);
  //   const claimResultAccount1 = await community
  //     .connect(account1)
  //     .claimResult(1);
  //   await claimResultAccount1.wait();
  //   expect(await usdt.balanceOf(account1.address)).to.equal(0);
  //   expect(await usdt.balanceOf(account2.address)).to.equal(0);
  //   const claimResultAccount2 = await community
  //     .connect(account2)
  //     .claimResult(1);
  //   await claimResultAccount2.wait();
  //   expect(await usdt.balanceOf(account2.address)).to.equal(60000000);
