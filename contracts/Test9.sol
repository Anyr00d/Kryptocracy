// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.7;

contract Test9 {
    
    struct Data {
        uint256 yesVotes;
        uint256 noVotes;
    }

    Data internal jsonData;

    function getJsonData() external view returns (uint256, uint256) {
        return (jsonData.yesVotes, jsonData.noVotes);
    }

    function setJsonData(string memory _option) external {
        if (keccak256(bytes(_option)) == keccak256(bytes("yes"))) {
            jsonData.yesVotes++;
        } else if (keccak256(bytes(_option)) == keccak256(bytes("no"))) {
            jsonData.noVotes++;
        }
    }
}
