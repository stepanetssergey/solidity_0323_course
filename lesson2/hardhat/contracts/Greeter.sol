//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Greeter {

    string private greeting;

    string public name;
    string public symbol;

    constructor(string memory _greeting) {
        //console.log("Deploying a Greeter with greeting:", _greeting);
        greeting = _greeting;
    }

    function greet() public view returns (string memory) {
        return greeting;
    }

    function setGreeting(string memory _greeting) public {
        console.log("Changing greeting from '%s' to '%s'", greeting, _greeting);
        greeting = _greeting;
    }

    function setName(string memory _name) public {
      name = _name;
    }

    function setSymbol(string memory _symbol) public {
      symbol = _symbol;
    }
}
