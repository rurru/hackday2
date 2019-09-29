import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Bio from './Bio.js';
import SearchForm from './SearchForm.js';

function App() {

  useEffect(() => {
    getUserData();
  }, []);

  const [userData, setUserData] = useState([]);
  const [userName, setUserName] = useState("rurru"); 
  

const getUserData = async () => {
  console.log('https://api.github.com/users/' + userName);
  const result = await axios.get( 'https://api.github.com/users/' + userName);
setUserData(result.data);
}

function HandleSearch(e)
{
  setUserName(e.value);
     console.log (":-P"); 
}

const display = !userName ? <SearchForm handler = {HandleSearch.bind(this)} /> :
  <div className="App"><Bio data = {userData} /></div>;

  return (
    <div>
      {display}
    </div>
  );
}

export default App;
