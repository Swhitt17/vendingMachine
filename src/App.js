import React from 'react';
import { BrowserRouter, Routes,Route} from 'react-router-dom';
import './App.css';
import VendingMachine from './VendingMachine';
import Chocolate from './Chocolate';
import Chips from './Chips';
import Soda from './Soda';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<VendingMachine />}></Route>
      <Route path='/chocolate' element={<Chocolate />}></Route>
      <Route path='/chips' element={<Chips />}></Route>
      <Route path='/soda' element={<Soda />}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
