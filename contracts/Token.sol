// contracts/Token.sol
pragma solidity ^0.8.20;

contract Token {
  string public name;
  string public symbol;

  constructor(string memory _name, string memory _symbol) {
    name = _name;
    symbol = _symbol;
  }
}