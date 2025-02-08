// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "./mintNFT.sol";

contract OurPlayer {
    
    struct Player {
        string name;
        uint256 funds;
        uint256 staked_amount;
    }

    Player public player;  // Only one player exists
    bool public playerExists = false;  // Track if the player is created

    // Create the player (only once)
    function createTheUser(string memory _name) public {
        require(!playerExists, "Player already exists");
        player = Player(_name, 0, 0);
        playerExists = true;
    }

    // Give free funds from the faucet
    function getFromFaucet() public {
        require(playerExists, "Player not registered");
        player.funds = 100;
    }

    // Retrieve player details
    function getPlayer() public view returns (string memory, uint256, uint256) {
        require(playerExists, "Player not registered");
        return (player.name, player.funds, player.staked_amount);
    }

    function stake() public {
        require(playerExists, "Player not registered");
        require(player.funds >= 32, "Insufficient funds");
        player.funds -= 32;
        player.staked_amount += 32;
    }

    function unstake() public {
        require(playerExists, "Player not registered");
        require(player.staked_amount >= 32, "Insufficient staked amount");
        player.funds += 32;
        player.staked_amount -= 32;
    }

    function reward() public {
        require(playerExists, "Player not registered");
        player.funds += 1;
    }
}
