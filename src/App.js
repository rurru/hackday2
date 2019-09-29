import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Bio from './Bio.js';

function App() {

  const [userData, setUserData] = useState([]);

  useEffect(
    () => { 
      getUserData();      
  })
  
  

const getUserData = async () => {
  
  const result = await axios.get( 'https://api.github.com/users/rurru');
setUserData(result.data);
}

  return (
    <div className="App">
      <Bio data = {userData} />
    </div>
  );
}

export default App;
