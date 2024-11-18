// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "../../contracts/dualRoles/IERC4907.sol";

contract MockNFT is ERC721, IERC4907 {
    mapping(uint256 => address) private _users;
    mapping(uint256 => uint256) private _expires;

    constructor(string memory name_, string memory symbol_) 
        ERC721(name_, symbol_) 
    {}

    function mint(address to, uint256 tokenId) external {
        _mint(to, tokenId);
    }

    function setUser(uint256 tokenId, address user, uint64 expires) external {
        require(_exists(tokenId), "ERC721: invalid token ID");
        _users[tokenId] = user;
        _expires[tokenId] = expires;
        emit UpdateUser(tokenId, user, expires);
    }

    function userOf(uint256 tokenId) external view returns (address) {
        if (_expires[tokenId] >= block.timestamp) {
            return _users[tokenId];
        }
        return address(0);
    }

    function userExpires(uint256 tokenId) external view returns (uint256) {
        return _expires[tokenId];
    }
} 