// src/services/adminService.js
import axios from 'axios';

const BASE_URL = 'http://localhost:3000/admin';

export const registerAdmin = async (adminData) => {
  try {
    const response = await axios.post(`${BASE_URL}/register`, adminData);
    console.log('Registration Successful:', response.data);
    return response.data;
  } catch (error) {
    console.error('Registration Error:', error);
    throw error;
  }
};

