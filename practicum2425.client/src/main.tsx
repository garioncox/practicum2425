import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import Navbar from "../Components/Navbar.tsx";
import "./index.css";
import Profile from "./components/profile.tsx";
import { Auth0Provider } from "@auth0/auth0-react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="text-center vh-100">
      <div className="row h-100">
        {/*Sidebar*/}
        <div className="col-2 bg-dark text-light py-5 d-flex">
          <div className="mt-auto">
            <Auth0Provider
              domain="dev-zas6rizyxopiwv2b.us.auth0.com"
              clientId="BOZHiKTbFJOrquI2E4QMI2qARqMW9OgC"
              authorizationParams={{
                redirect_uri: window.location.origin,
              }}
            >
              <Profile />
            </Auth0Provider>
          </div>
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
  </StrictMode>
);
