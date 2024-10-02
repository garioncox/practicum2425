import { StrictMode } from 'react'
import App from './App.tsx'
import Navbar from './Components/Navbar.tsx'
import './index.css'
import Sidebar from './Components/Sidebar.tsx'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom'

ReactDOM.render(
    <BrowserRouter>
        <StrictMode>
            <div className="text-center vh-100">
                <div className="row h-100">
                    {/*Sidebar*/}
                    <div className="col-2 bg-dark text-light py-5 d-flex justify-content-center">
                        <Sidebar />
                    </div>

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
    </BrowserRouter>,
    document.getElementById("root")
)
