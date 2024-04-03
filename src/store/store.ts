import { configureStore, combineReducers, createStore } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer, persistStore } from "redux-persist";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import couterReducer from "./counterSlice";
import rootReducer, { CounterState } from "./counterSlice"; // Import the CounterState type
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ["counter"],
    stateReconciler: autoMergeLevel2,
}

const rootReducers = combineReducers({
    counter: persistReducer(persistConfig, rootReducer),
});

// const rootReducer = persistReducer<CounterState>(persistConfig, counterReducer);

export const store = createStore(rootReducers);
// export type RootState = ReturnType<typeof rootReducer>;
export const persistor = persistStore(store);



