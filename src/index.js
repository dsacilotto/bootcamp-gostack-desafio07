import React from 'react';
import { StatusBar } from 'react-native';

import './config/ReactotronConfig';

import colors from './styles/colors';

import Routes from './routes';

function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={colors.dark} />
      <Routes />
    </>
  );
}

export default App;
