//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;


contract Community {
 
    string public CommunityName;

    mapping(address => bool) public activeUsers;

    //function addMatch(........)


    //function addMatchResult(.......)


    //function voteValidator(.......)


    function signUp() public {
        activeUsers[msg.sender] = true;
    }
     
}