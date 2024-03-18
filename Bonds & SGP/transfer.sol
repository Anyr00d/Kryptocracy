// SPDX-License-Identifier: MIT
pragma solidity >=0.8.2 <0.9.0;
contract Storage {
    uint data;
    function set(uint x) public {
        data = x;
    }
    function get() public view returns (uint) {
        return data;
    }
} 