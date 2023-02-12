import axios from 'axios';

const API_URL = 'api/v1/users';

// Register endpoint
const register = async (userData) => {
  const response = await axios.post(API_URL + '/signup', userData);
  if (response.data)
    localStorage.setItem('user', JSON.stringify(response.data));
  return response.data;
};

// Login endpoint
const login = async (userData) => {
  const response = await axios.post(API_URL + '/login', userData);
  if (response.data)
    localStorage.setItem('user', JSON.stringify(response.data));
  return response.data;
};

// Logout user
const logout = () => {
  localStorage.removeItem('user');
};

// Create services
const authService = {
  register,
  login,
  logout,
};

export default authService;
