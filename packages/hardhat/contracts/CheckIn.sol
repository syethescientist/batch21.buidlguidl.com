// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IBatchRegistry {
    function checkIn() external;
}

contract CheckIn {
    IBatchRegistry public registry;

    constructor(address _registry) {
        registry = IBatchRegistry(_registry);
    }

    function checkMeIn() public {
        registry.checkIn();
    }
}