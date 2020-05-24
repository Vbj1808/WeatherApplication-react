import React from 'react';
const api = {
  key: "86aa98cfeffa6f6779d9ece3a9d4044d" ,
  base: "https://api.openweathermap.org/data/2.5/"
};

function App() {
  return (
    <div className="App">
      <main>
        <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="Search..."
            />
        </div>
      </main>
    </div>
  );
}

export default App;
