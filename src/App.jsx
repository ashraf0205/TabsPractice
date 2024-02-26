import { useState,useEffect } from 'react'
import './App.css'
import BasicTabs from './components/BasicTabs'
import SearchInput from './components/SearchInput'

function App() {

  
  // function handleInputValue(input) { //input function
    
  //   const getData = async () => {
  //     const responce = await fetch(`https://dummyjson.com/users/search?q=${input}`);
  //     const data = await responce.json();
  //     setRows(data.users);
  //   };
  //   getData();
  // }

  // input={handleInputValue}
  return (
    <>
    <SearchInput />
    <BasicTabs />
    </>
  )
}

export default App
