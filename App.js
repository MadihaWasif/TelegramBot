import React from 'react';
import Weather from './Components/Weather';
import Subscribe from './Components/Subscribe';
import Admin from './Components/Admin';

function App() {
  return (
    <div className="App">
    <h2>Telegram Bot App</h2>
      <Weather />
      <Subscribe />
      <Admin />
    </div>
  );
}

export default App;


