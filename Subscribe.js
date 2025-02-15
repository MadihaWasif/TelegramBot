import React, { useState } from 'react';
import { subscribeUser } from '../Sevice/subscribeser';

const Subscribe = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();
    try {
      await subscribeUser(email);
      alert('Subscribed successfully!');
    } catch (error) {
      alert('Subscription failed!');
      console.error('Subscription Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubscribe}>
      <h2>Subscribe for Daily Weather Updates</h2>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">Subscribe</button>
    </form>
  );
};

export default Subscribe;



//------------------------------------------
// import React, { useState } from 'react';
// import axios from 'axios';
// import './subscribe.css';

// const Subscribe = () => {
//     const [email, setEmail] = useState('');

//     const subscribe = () => {
//         axios.post('http://localhost:3000/weather/subscribe', { email })
//             .then(response => alert(response.data.message))
//             .catch(error => console.log(error));
//     };

//     return (
//         <div className="subscription-container">
//             <h2>Subscribe for Daily Weather Updates</h2>
//             <input 
//                 type="email" 
//                 placeholder="Enter your email" 
//                 value={email} 
//                 onChange={(e) => setEmail(e.target.value)}
//             />
//             <button onClick={subscribe}>Subscribe</button>
//         </div>
//     );
// };

// export default Subscribe;

