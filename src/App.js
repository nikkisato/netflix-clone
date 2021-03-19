import React from 'react';
import './App.css';
import HomeScreen from './Component/HomeScreen/HomeScreen';
import Nav from './Component/Nav/Nav';
import Banner from './Component/Banner/Banner';
import Row from './Component/Row/Row';

function App() {
  return (
    <div className='app'>
      <Nav />
      <HomeScreen />
      <Banner />
      {/*<Row />*/}
    </div>
  );
}

export default App;
