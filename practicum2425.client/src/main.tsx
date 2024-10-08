import { StrictMode } from "react";
import App from "./App.tsx";
import Navbar from "./Components/Navbar.tsx";
import "./index.css";
import Sidebar from "./Components/Sidebar.tsx";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <BrowserRouter>
    <StrictMode>
      <Auth0Provider
        domain="dev-zas6rizyxopiwv2b.us.auth0.com"
        clientId="BOZHiKTbFJOrquI2E4QMI2qARqMW9OgC"
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
        cacheLocation="localstorage"
      >
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
      </Auth0Provider>
    </StrictMode>
    ,
  </BrowserRouter>,
  document.getElementById("root")
);
