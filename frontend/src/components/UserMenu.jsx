/* eslint-disable */

import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { expandMenu, collapseMenu } from '../features/other/userMenuSlice';

import '../public/css/userMenu.css';

function UserMenu() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isExpanded = useSelector((state) => state.userMenu.isExpanded);

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
          <hr />
          <a href="#">Setting</a>
          {/* <Link to="">
            <FaHorseHead /> Profile
          </Link>
          <Link to="">
            <FaHorseHead /> Change Password
          </Link>
          <Link to="">
            <FaHorseHead /> Bill
          </Link> */}
        </div>
      )}
    </div>
  );
}

export default UserMenu;
