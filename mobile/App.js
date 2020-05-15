import React from 'react'; 
import { StatusBar } from 'react-native';
        //YallowBox

import Routes from './src/routes';

// YallowBox.ignoreWarnings([
 // 'Unrecognized WebSocket'
//]);

export default function App() {
  console.disableYellowBox = true; //pro app expo não fica desconectando no celular
  return (
      <>
        <StatusBar barStyle="light-content" backgroundColor="#7D40E7" />
        <Routes />
      </> 
    );
}

