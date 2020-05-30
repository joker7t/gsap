import React, { useState } from 'react';
import './App.scss';
import MainLoader from './components/MainLoader';
import MainPage from './components/MainPage';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const loading = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }

  loading();

  return (
    isLoading ? <MainLoader /> : <div className="App">
      <MainPage />
    </div>
  );
}

export default App;
