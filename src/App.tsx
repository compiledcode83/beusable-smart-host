import React from 'react';
import { Provider } from 'react-redux';
import Home from './pages/Home';
import { store } from './redux/store';

import './App.css';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className='app-container'>
        <Home />
      </div>
    </Provider>
  );
};

export default App;
