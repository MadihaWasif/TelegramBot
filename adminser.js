import axios from 'axios';

export const registerAdmin = async (adminData) => {
  const response = await axios.post('http://localhost:3000/admin/register', adminData);
  return response.data;
};
