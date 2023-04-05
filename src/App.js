import React from 'react'
import { BrowserRouter, Router, Routes } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi'
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import Header from './components/Header';
import BasicBreadcrumb from './components/BasicBreadcrumb'
import ChartStats from './components/ChartStats';
import Formpage from './components/Formpage'



function App() {

    return (
        <>
            <div className='h-screen grid grid-rows-5 bg-slate-200'>
                <div className=' fixed row-start-1'>
                    <Header />
                </div>

                <div className=' inline row-start-2 text-center gap-12 sm:inline-block '>

                    {/* <ChartStats className='bg-purple-600' /> */}
                    <Formpage/>

                </div>

                <div className=' fixed right-4 bottom-4 bg-blue-800 rounded-full' style={{ zIndex: '1000' }}>
                    <TooltipComponent content="settings" position="Top">
                        <button className=' text-4xl text-white p-3'>
                            <FiSettings />
                        </button>
                    </TooltipComponent>
                </div>
            </div>
        </>
    )
}

export default App