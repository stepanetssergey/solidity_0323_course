const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Sign up to community", () => {
  it("When user calls signUp we need to write it to active Users", async () => {
    const USDT = await ethers.getContractFactory("USDT")
    const usdt = await USDT.deploy(1000000000);
    await usdt.deployed();
    const Community = await ethers.getContractFactory("Community");
    const community = await Community.deploy(usdt.address);
    await community.deployed();
    const [owner] = await ethers.getSigners();
    const signUpTrx = await community.signIn();
    await signUpTrx.wait();
   // console.log(await community.Users(owner.address));
    const user = await community.Users(owner.address);
    expect(user.active).to.equal(true);
    expect(user.signed).to.equal(true);
    const addMatchTRX = await community.addMatch("firstMatch","command1","command2",3,10000000);
    await addMatchTRX.wait();
    const Match = await community.Matches(1);
    expect(Match.name).to.equal("firstMatch");
    
    
    // expect(await community.activeUsers(owner.address)).to.equal(true);

  // console.log(usdt.address);
  });
});
