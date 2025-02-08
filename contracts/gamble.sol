/// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./ourPlayer.sol";

contract Gamble is OurPlayer {
    uint private randNonce = 0;
    
    event Win(uint amount);

    // Secure randomness using blockhash
    function randMod(uint _modulus) internal returns (uint) {
        randNonce++;
        return uint(keccak256(abi.encodePacked(block.prevrandao, randNonce))) % _modulus;
    }

    function playerGambles(uint256 _amount) public {
        require(playerExists, "Player not registered");
        require(player.funds >= _amount, "Insufficient funds");

        player.funds -= _amount;
        uint256 win = randMod(10);
        
        if (win % 2 == 0) {
            player.funds += _amount * 2;
            emit Win(_amount * 2);
        }
    }
}
