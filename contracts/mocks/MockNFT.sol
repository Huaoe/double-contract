// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "../dualRoles/IERC4907.sol";

contract MockNFT is ERC721, IERC4907 {
    
    mapping(uint256 => UserInfo) internal _users;
    
    constructor() ERC721("MockNFT", "MNFT") {}
    
    struct UserInfo {
        address user;
        uint64 expires;
    }

    function setUser(uint256 tokenId, address user, uint64 expires) external {
        require(ownerOf(tokenId) == _msgSender() || isApprovedForAll(ownerOf(tokenId), _msgSender()) || getApproved(tokenId) == _msgSender(), "Not approved or owner");
        UserInfo storage info = _users[tokenId];
        info.user = user;
        info.expires = expires;
        emit UpdateUser(tokenId, user, expires);
    }

    function userOf(uint256 tokenId) external view returns (address) {
        if (uint256(_users[tokenId].expires) >= block.timestamp) {
            return _users[tokenId].user;
        }
        return address(0);
    }

    function userExpires(uint256 tokenId) external view returns (uint256) {
        return _users[tokenId].expires;
    }

    function supportsInterface(bytes4 interfaceId) public view virtual override(ERC721) returns (bool) {
        return interfaceId == type(IERC4907).interfaceId || super.supportsInterface(interfaceId);
    }

    // Mint function for testing
    function mint(address to, uint256 tokenId) external {
        _mint(to, tokenId);
    }
} 