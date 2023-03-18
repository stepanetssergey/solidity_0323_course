const { expect } = require("chai");
const { ethers } = require("hardhat");
describe ("test storage file", () => {
    it ("get name after deploy", async () => {
        const Storage = await ethers.getContractFactory("Storage")
        const storage = await Storage.deploy("My name")
        await storage.deployed()
        const name = await storage.name();
        expect(name).to.equal("My name")
 
    })

    it ("must see our deposit value", async () => {

        const Storage = await ethers.getContractFactory("Storage")
        const storage = await Storage.deploy("My name")
        await storage.deployed()
        const setDepositTrx = await storage.setDeposit(1000)
        await setDepositTrx.wait()
        const deposit = await storage.deposit();
        expect(deposit).to.equal("1000")


        
    })
    it ("must see our balances value", async () => {

        const Storage = await ethers.getContractFactory("Storage")
        const storage = await Storage.deploy("My name")
        await storage.deployed()
        const [owner] = await ethers.getSigners()
        const setBalancesTrx = await storage.setBalance(2000)
        await setBalancesTrx.wait()
        const balance = await storage.balances(owner.address);
        expect(balance).to.equal("2000")


        
    })
})