import axios from 'axios';

export const subscribeUser = async (email) => {
  const response = await axios.post('http://localhost:3000/subscribe', { email });
  return response.data;
};
