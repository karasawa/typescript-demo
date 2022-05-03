import React from 'react';
import './App.css';
import Sample from './components/Sample';

function App() {
  return (
    <div className="App">
      <Sample test='test' object={{name: 'karasawa', age: 23}} />
    </div>
  );
}

export default App;
