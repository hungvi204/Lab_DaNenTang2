import { configureStore, createStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import rootReducer from './reducers';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { pokemonApi } from '../screens/Lab6/pokemon';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ["counter"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = createStore(persistedReducer);
export const store = configureStore({
  reducer: {
    persistedReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
})
setupListeners(store.dispatch)

export const stores = createStore(persistedReducer);
export const persistor = persistStore(stores);
