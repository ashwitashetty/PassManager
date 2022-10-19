import React from 'react';

import AuthStackNavigation from './src/navigation/AuthStackNavigation';

import {Store} from './src/screens/redux/Store';
import {Provider} from 'react-redux';
const App = () => {
  return (
    <Provider store={Store}>
      <AuthStackNavigation />
    </Provider>
  );
};

export default App;
