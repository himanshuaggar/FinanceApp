import { View, Text } from 'react-native'
import React from 'react'
import AppNavigator from './src/navigation/AppNavigator'
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import transferReducer from './src/redux/slices/transferSlice';

const store = configureStore({
  reducer: {
    transfers: transferReducer,
  },
});
const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
  </Provider>
  )
}

export default App