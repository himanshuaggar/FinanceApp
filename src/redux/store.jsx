import {configureStore} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import transferReducer from './slices/transferSlice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, transferReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
