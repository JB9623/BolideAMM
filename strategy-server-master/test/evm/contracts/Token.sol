//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {
    uint constant _initial_supply = 1000000 * (10**18);
    constructor(string memory name, string memory symbol) ERC20(name, symbol) {
        _mint(msg.sender, _initial_supply);
    }
}
