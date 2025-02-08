/// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;
import "./gamble.sol";

contract ScammerLtd is Gamble{

    event MelonScamEvent(Player _player, uint256 amount);
    event StobsScamEvent(Player _player, uint256 amount);
    event RugPullEvent(Player _player, uint256 amount);

    function MelonScam (bool _transfer) public{
        if (_transfer == true){
            //transfer all the funds to the owner
            player.funds -= 50;
        }
        emit MelonScamEvent(player, player.funds);
    }

    function StobsScam (bool _hasKey) public{
        if (_hasKey == true){
            //transfer all the funds to the owner
            player.funds -= 50;
        }
        emit StobsScamEvent(player, player.funds);
    }

    function RugPull() public {
        player.funds = 0;
        emit RugPullEvent(player, 0);
    }
}