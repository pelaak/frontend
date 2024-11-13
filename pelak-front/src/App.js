import React from 'react';
import Home from './Pages/HomePage';
import Pelak from './Pages/PelakPage'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

const App = () => {
    return (<BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/pelak/:id" element={<Pelak/>}/>
        </Routes>
    </BrowserRouter>);
};

export default App;