import React from 'react';

import AuthStackNavigation from './src/navigation/AuthStackNavigation';

import Store from './src/screens/redux/Store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';

let persistor = persistStore(Store);

const App = () => {
  return (
    <Provider store={Store}>
      <PersistGate persistor={persistor}>
        <AuthStackNavigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
