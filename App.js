import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Auth from './src/Route/Auth';
import Store from './src/Redux/Store';
import {Provider} from 'react-redux';
const App = () => {
  return (
    <Provider store={Store}>
      <Auth />
    </Provider>
  );
};
export default App;
