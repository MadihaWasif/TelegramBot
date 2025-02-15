import React, { useState } from 'react';
import { registerAdmin } from '../Sevice/adminser';

const Admin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await registerAdmin({ email, password });
      alert('Admin registered successfully!');
    } catch (error) {
      alert('Registration failed!');
      console.error('Registration Error:', error);
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <h2>Admin Registration</h2>
      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default Admin;








//-----------------------------------
// import React, { useState } from 'react';
// import axios from 'axios';
// import './admin.css';

// const Admin = () => {
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//     const [users, setUsers] = useState([]);

//     const googleLogin = () => {
//         window.open('http://localhost:3000/auth/google', '_self');
//     };

//     const getUsers = () => {
//         axios.get('http://localhost:3000/admin/users')
//             .then(response => setUsers(response.data))
//             .catch(error => console.log(error));
//     };

//     return (
//         <div className="admin-container">
//             <h2>Admin Panel</h2>
//             {!isLoggedIn ? (
//                 <button onClick={googleLogin}>Login with Google</button>
//             ) : (
//                 <div>
//                     <button onClick={getUsers}>Get Users</button>
//                     <ul>
//                         {users.map(user => (
//                             <li key={user.id}>{user.email}</li>
//                         ))}
//                     </ul>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Admin;

