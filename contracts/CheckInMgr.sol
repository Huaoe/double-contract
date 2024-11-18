// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "./OwnableContract.sol";

/// @title CheckInMgr
/// @notice Manages check-in data for users with expiration timestamps
/// @dev Inherits from OwnableContract for access control
contract CheckInMgr is OwnableContract {
    struct CheckInData {
        uint256 oid;
        address user;
        uint64 expiredAt;
    }

    mapping(uint256 => CheckInData) checkInMap;

    /// @notice Resets expired check-ins to a new address
    /// @param ids Array of check-in IDs to reset
    /// @param to Address to set as new user for expired check-ins
    function resetExpiredTo(uint256[] memory ids, address to)
        public
        virtual
        onlyAdmin
    {
        for (uint256 index = 0; index < ids.length; index++) {
            uint256 oid = ids[index];
            if (isCheckInDataExpired(oid)) {
                setUser(oid, to, 0);
            }
        }
    }

    /// @notice Checks if a check-in has expired
    /// @param oid The check-in ID to verify
    /// @return bool True if the check-in has expired
    function isCheckInDataExpired(uint256 oid) public view returns (bool) {
        return checkInMap[oid].expiredAt < block.timestamp;
    }

    /// @notice Sets the user and expiration for a check-in
    /// @param oid The check-in ID
    /// @param to The user address
    /// @param expiredAt The expiration timestamp
    function setUser(
        uint256 oid,
        address to,
        uint64 expiredAt
    ) internal virtual {
        checkInMap[oid] = CheckInData(oid, to, expiredAt);
    }
}
