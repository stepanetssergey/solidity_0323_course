const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Greeter", function () {
  it("Should return the new greeting once it's changed", async function () {
    const Greeter = await ethers.getContractFactory("Greeter");
    const greeter = await Greeter.deploy("Hello, world!");
    await greeter.deployed();

    expect(await greeter.greet()).to.equal("Hello, world!");

    const setGreetingTx = await greeter.setGreeting("Hola, mundo!!!!!!");
    // wait until the transaction is mined
    await setGreetingTx.wait();

    const nameTrx = await greeter.setName("Perfect Token") 
    await nameTrx.wait();

    const symbolTrx = await greeter.setSymbol("MPT")
    await symbolTrx.wait();

    expect(await greeter.greet()).to.equal("Hola, mundo!!!!!!");
    expect(await greeter.name()).to.equal("Perfect Token")
    expect(await greeter.symbol()).to.equal('MPT')
  });
});



