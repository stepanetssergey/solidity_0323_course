const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Sign up to community", () => {
  it("When user calls signUp we need to write it to active Users", async () => {
    const Community = await ethers.getContractFactory("Community");
    const community = await Community.deploy();
    await community.deployed();
    const [owner] = await ethers.getSigners();
    const signUpTrx = await community.signUp();
    await signUpTrx.wait();
    expect(await community.activeUsers(owner.address)).to.equal(true);
  });
});
