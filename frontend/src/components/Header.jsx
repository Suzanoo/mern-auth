import { FaSignInAlt, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { logout, reset } from '../features/auth/authSlice';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Home</Link>
      </div>
      <ul>
        <li>
          <Link to="/api/v1/users/login">
            <FaSignInAlt />
            Login
          </Link>
        </li>
        <li>
          <Link to="/api/v1/users/signup">
            <FaUser />
            Register
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;

/*
function Header() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/');
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">HW12</Link>
      </div>
      <ul>
        {user ? (
          <li>
            <button className="btn" onClick={onLogout}>
              <FaSignOutAlt /> Logout
            </button>
          </li>
        ) : (
          <>
            <li>
              <Link to="/api/v1/login">
                <FaSignInAlt /> Login
              </Link>
            </li>
            <li>
              <Link to="/api/v1/signup">
                <FaUser /> Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
}

export default Header;
*/
