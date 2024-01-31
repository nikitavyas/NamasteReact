import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageIntro from './PageIntro';
import Layout from './layout';
import AsyncAwaitExample from './AsyncAwaitExample';

function App() {
  return (
    <BrowserRouter>
   <Routes>
    <Route path='/' element={<Layout/>}>
      <Route path='/' element={<PageIntro/>}/>
      <Route path='/async-await-example' element={<AsyncAwaitExample/>}/>
    </Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
