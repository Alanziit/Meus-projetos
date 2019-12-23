import React from 'react';
import './App.css';
import Header from './components/header';
import Propaganda from './components/propaganda';
import Noticia1 from './components/noticia1';
import Esporte from './components/Esporte';
import Propaganda2 from './components/propaganda2';

function App() {
  return (
   <div>
     <Header/>
    <Propaganda/>
    <Noticia1/>
    <Esporte/>
    <Propaganda2/>

   </div>

  );
}

export default App;
