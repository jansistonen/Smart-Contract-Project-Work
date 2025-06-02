// this is one of the contracts deployed with Remix IDE
// contract address 0x5DF261361238ba7be05268A5b7851e1617D9E531

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract HelloWorld {
    string public message;

    function setMessage(string calldata _message) public {
        message = _message;
    }

    function getMessage() public view returns (string memory) {
        return message;
    }
}
