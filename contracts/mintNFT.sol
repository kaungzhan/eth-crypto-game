// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract MintNFT is ERC721 {
    address public playerAddr;
    bool public hasMinted = false;
    uint256 public constant TOKEN_ID = 1;

    constructor() ERC721("GameNFT", "GNFT") {
        playerAddr = msg.sender; // Assign player at deployment
    }

    function mintNFT() public {
        require(msg.sender == playerAddr, "Only the player can mint");
        require(!hasMinted, "NFT already minted");

        _mint(playerAddr, TOKEN_ID); // Mint a single NFT with fixed token ID
        hasMinted = true;
    }
}