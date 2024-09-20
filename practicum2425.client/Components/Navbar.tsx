import { Auth0Provider } from "@auth0/auth0-react";
import LoginButton from "../src/components/login";
import LogoutButton from "../src/components/logout";

function Navbar() { 
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary py-3">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">
                  Disabled
                </a>
              </li>
            </ul>

            <Auth0Provider
              domain="dev-zas6rizyxopiwv2b.us.auth0.com"
              clientId="BOZHiKTbFJOrquI2E4QMI2qARqMW9OgC"
              authorizationParams={{
                redirect_uri: window.location.origin,
              }}
            >
              <ul className="ms-auto navbar-nav">
                <li className="nav-item mx-2">
                  <LoginButton />
                </li>
                <li className="nav-item mx-2">
                  <LogoutButton />
                </li>
              </ul>
            </Auth0Provider>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;