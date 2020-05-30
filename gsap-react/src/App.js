import React, { useState } from 'react';
import './App.scss';
import MainLoader from './components/MainLoader';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const loading = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }

  loading();

  return (
    isLoading ? <MainLoader /> : <div className="App">

    </div>
  );
}

export default App;
