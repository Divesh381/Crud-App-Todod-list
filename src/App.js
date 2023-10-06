import React from 'react'
import './App.css'
import AddTods from './components/ADDTOD/AddTods';
import List from './components/ListData/List';

function App() {

  return (
    <div className='container'>
      <div className='InputContainer'>
        <AddTods />
      </div>
       <div className='List'>
        <List />
      </div>
    </div>
  );
}

export default App;
