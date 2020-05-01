import React from 'react'; 

import Routes from './src/routes';

export default function App() {
  console.disableYellowBox = true; //pro app expo não fica desconectando no celular
  return (
    <Routes />
    
  );
}

