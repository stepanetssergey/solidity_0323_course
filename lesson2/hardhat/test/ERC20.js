const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ERC20", () => {
  it("Should return name and symbol and totalSupply of token after deploy", async () => {
    const ERC20Test = await ethers.getContractFactory("ERC20");
    const token = await ERC20Test.deploy("MyToken", "MTS", 1000000000);
    await token.deployed();
    expect(await token.name()).to.equal("MyToken");
    expect(await token.symbol()).to.equal("MTS");
    expect(await token.totalSupply()).to.equal(1000000000);
  });
  it("Should return balances of owner", async () => {
    const ERC20 = await ethers.getContractFactory("ERC20");
    const token = await ERC20.deploy("MyToken", "MTS", 1000000000);
    await token.deployed();
    const [owner] = await ethers.getSigners();
    expect (await token.balanceOf(owner.address));
  });
  it("we see to transfer and get good amount", async () =>{
    const ERC20 = await ethers.getContractFactory("ERC20");
    const token = await ERC20.deploy("MyToken", "MTS", 1000000000);
    await token.deployed();
    const [owner, account1] = await ethers.getSigners();
    const transTX = await token.tranfer(account1.address, 100000000);
    const transTX.wait();
    expect (await token.balanceOf(account1.address).to.equal(100000000);
    




  })
  // it for transfer

  // it for approve

  // it for transfer from


})
