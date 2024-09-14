import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Navbar from '../Components/Navbar.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <div className="text-center vh-100">
            <div className="row h-100">
                {/*Sidebar*/}
                <div className="col-2 bg-dark text-light py-5">Sidebar</div>

                {/*Main layout*/}
                <div className="col-10 px-0">
                    <Navbar />
                    <div className="m-5">
                        <App />
                    </div>
                </div>
            </div>
        </div>
    </StrictMode>,
)
