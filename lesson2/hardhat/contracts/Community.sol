//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;


contract Community {
 
    string public CommunityName;

    uint matchId;

    struct Match {
        string name;
        string part1;
        string part2;
        uint scorePart1;
        uint scorePart2;
        uint startDate;
    }


    struct User {
        uint balance;
    }

    mapping(uint => Match) internal Matches;
    mapping(address => User) internal Users;
    
    function getMatch(uint _id) public view returns(Match memory) {
        return Matches[_id];
    }

    function addMatch(string memory _name, string memory _part1, string memory _part2, uint _startDate) public {
        matchId += 1;
        Matches[matchId].name = _name;
        Matches[matchId].part1 = _part1;
        Matches[matchId].part2 = _part2;
        Matches[matchId].startDate = _startDate;

    }

    function signIn() public {
        Users[msg.sender].balance = 0;
    }


     
}