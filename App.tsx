import React, { useEffect, useState } from 'react';
import Lab1Bai1 from './src/screens/Lab1/Bai1';
import Lab1Bai2 from './src/screens/Lab1/Bai2';
import { View } from 'react-native';
import Lab1Bai3 from './src/screens/Lab1/Bai3';
import UseStateHOOK from './src/screens/Lab2/DemoBai2/useStateHOOK';
import UseRefHOOK from './src/screens/Lab2/DemoBai2/useRefHOOK';
import UseEffectHOOK from './src/screens/Lab2/DemoBai2/useEffectHOOK';
import UserMemo from './src/screens/Lab2/DemoBai2/useMemoHOOK';
import UseContex from './src/screens/Lab2/DemoBai2/useContextHOOK';
import Main from './src/screens/Lab2/Bai1/Main';
import Lab3Bai1 from './src/screens/Lab3/Bai1';
import Lab3Bai2 from './src/screens/Lab3/Bai2';
import Lab3Bai3 from './src/screens/Lab3/Bai3';
import Lab4Bai1_2 from './src/screens/Lab4/Bai1_2';
import { Provider } from 'react-redux';
import Lab6Bai1 from './src/screens/Lab6/Lab6Bai1';
// import { store, persistor } from './src/store/store';
import { store, persistor, stores } from './src/stores/store';
import { PersistGate } from 'redux-persist/integration/react';
import CounterComponent from './src/stores/CounterComponent';
import Lab6Bai2 from './src/screens/Lab6/Lab6Bai2';
import Lab6Bai3 from './src/screens/Lab6/Lab6Bai3';
import Lab7Bai2 from './src/screens/Lab7/Lab7Bai2';
import Lab7Bai3 from './src/screens/Lab7/Lab7Bai3';
import GoogleSignIn from './src/screens/Lab7/Lab7Bai3';

import Lab8bai3 from './src/screens/Lab8/Lab8Bai3';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Lab7Bai3/>
      </PersistGate>
    </Provider>
  )
}

export default App;
