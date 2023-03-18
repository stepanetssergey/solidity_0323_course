// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;


interface IERC20 {
    
  function name() external view returns(string memory);

  function symbol() external view returns(string memory);

  function totalSupply() external view returns (uint);

  function blanceOf(address _address) external view returns(uint);

  function tranfer (address _to, uint _amount) external returns (bool);
  
  function approve(address _sender, uint _amount) external;

  function transferFrom(address _from, address _to, uint _amount) external;

  function mint(address _to, uint _amount) external;
}