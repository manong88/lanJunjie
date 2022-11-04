import {useState} from 'react'
import './style/app.less'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "./pages/home/index.jsx";

function App() {

    return (
        <BrowserRouter>
                <Routes>
                    <Route path='/home' element={<Home/>}></Route>
                </Routes>
        </BrowserRouter>
    )
}

export default App
