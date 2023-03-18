//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;


contract Storage {
    
    string public name;
    uint public deposit;
    
    mapping (address => uint) public balances;
    constructor (string memory _name) {
        name = _name;
      
    }
  
function setDeposit (uint _deposit) public {
    deposit = _deposit;
}
function setBalance (uint _balance) public {
balances[msg.sender] = _balance;
}



}