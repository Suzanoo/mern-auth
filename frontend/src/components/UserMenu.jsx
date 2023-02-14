/* eslint-disable */

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { expandMenu, collapseMenu } from '../features/other/userMenuSlice';

import '../public/css/userMenu.css';

function UserMenu() {
  const isExpanded = useSelector((state) => state.userMenu.isExpanded);
  const dispatch = useDispatch();

  function handleProfilePictureClick() {
    // Handle profile picture button click here
  }

  function handleMouseEnter() {
    dispatch(expandMenu());
  }

  function handleMouseLeave() {
    dispatch(collapseMenu());
  }

  return (
    <div
      className="user-menu"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="profile-img" onClick={handleProfilePictureClick}>
        {/* Insert profile picture here */}
      </button>
      {isExpanded && (
        <div className="side-nav">
          <a href="#">Profile</a>
          <a href="#">Change Password</a>
          <a href="#">Bill</a>
        </div>
      )}
    </div>
  );
}

export default UserMenu;
