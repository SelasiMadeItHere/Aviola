import React, {useEffect} from 'react'
import { BrowserRouter, Router, Routes } from 'react-router-dom'; 
import {FiSettings} from 'react-icons/fi'
import {TooltipComponent} from '@syncfusion/ej2-react-popups';
import Header from './components/Header';
import SideNav from './components/SideNav';
import './App.css'


function App() {
  return (
    <div>
        <BrowserRouter>
            <div className=' flex relative dark:bg-main-dark-bg'>
                <Header/>
                <SideNav/>
                <div className=' fixed right-4 bottom-4 bg-blue-800 rounded-full' style={{ zIndex: '1000'}}>
                    <TooltipComponent content ="settings" position="Top">
                        <button className=' text-4xl text-white p-3'>
                            <FiSettings/>
                        </button>
                    </TooltipComponent>
                </div>
            </div>
        </BrowserRouter>
    </div>
)
}

export default App