const { expect } = require("chai");
const { ethers } = require("hardhat");

describe ("Valuta", () => {
    it("shold bre return name, symbol&tokenSupply after deploy", async () => {
    const valutaTest = await ethers.getContractFactory("Valuta");
    const token = await valutaTest.deploy("valutaToken", "VTK", 10000000000);
    await token.deployed();
    expect(await token.name()).to.equal("valutaToken");
    expect(await token.symbol()).to.equal("VTK");
    expect(await token.totalSupply()).to.equal(10000000000); 
    })

    it("should return balance owner", async () => {
        const valutaTest = await ethers.getContractFactory("Valuta");
        const token = await valutaTest.deploy("valutaToken", "VTK", 10000000000);
        await token.deployed();
        const[owner] = await ethers.getSigners();
        expect(await token.balanceOf(owner.address)); 
        })

    it("we look transfer and good amount", async () => {
            const valutaTest = await ethers.getContractFactory("Valuta");
            const token = await valutaTest.deploy("valutaToken", "VTK", 10000000000);
            await token.deployed();
            const[owner, account1] = await ethers.getSigners();
            const transferTX = await token.transfer (account1.address, 10000000000);
            await transferTX.wait();
            expect(await token.balanceOf(account1.address)).to.equal(10000000000);
        })







})