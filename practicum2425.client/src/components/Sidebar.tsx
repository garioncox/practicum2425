import { Auth0Provider } from "@auth0/auth0-react";
import Profile from "./profile";

function Sidebar() {
    return (
        <>
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
        </>
    );
}

export default Sidebar;
