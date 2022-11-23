import React from 'react';
import Search from './Search';
import Pagination from './Pagination';
import Stories from './Stories';
import {useContext } from 'react';
import { AppContext } from './Context';

const App = () => { 
  const data = useContext(AppContext);
  return (
    <>
    <div>context hook ------{data}</div>
    <Search/>
    <Pagination/>
    <Stories/>
    </>
    
  );
}

export default App