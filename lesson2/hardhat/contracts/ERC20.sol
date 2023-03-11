//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;


contract ERC20 {


   string public _name;
   string public _symbol;
   string public _totalSupply;

   mapping(address => uint) public balances;
   mapping(address => mapping(address => uint)) public allowens;
  constructor(string memory tokenName, string memory tokenSymbol, string memory tokenTotalSupply) {
      _name = tokenName;
      _symbol = tokenSymbol;
      _totalSupply = tokenTotalSupply;
  }


  // function blanceOf(address _address) public view returns(address)

  // function name() public view returns(string memory)

  // function symbol() public view returns(string memory)

  // function transfer(address _to, uint amout) public returns(bool)

  // function transferFrom(address _from, address _to, uint _amount) public 

  // function approve(address _sender, uint amount)


  //lesson2 hardhat 
  // inside folder hardhat in console run:    npm i

  // write function and test for this functions



}
