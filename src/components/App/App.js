import React, { useState } from 'react';
import './App.css';
import SearchForm from '../SearchForm/SearchForm';

const App = () => {
  const [url, setUrl] = useState('');

  const saveUrl = url => {
    setUrl(url);
  }

  return (
    <div>
      <h1>VTT Caption Editor</h1>
      <SearchForm saveUrl={saveUrl}/>
    </div>
  );
}

export default App;
