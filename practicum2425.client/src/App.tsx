import { useState } from 'react';
import ViewShift from '../Components/ViewShift';
import ViewCompany from '../Components/ViewCompany'
import ProjectForm from '../Components/ProjectForm';
import ViewProject from '../Components/ViewProject';
import { Shift } from '../DataInterface/ShiftInterface';
import ShiftForm from '../Components/ShiftForm'
import { Auth0Provider } from '@auth0/auth0-react';
import LoginButton from './components/login';
import LogoutButton from './components/logout';
import Profile from './components/profile';
import {BrowserRouter} from 'react-router-dom';

function App() {
    const [shifts, setShifts] = useState<Shift[]>()
    return (
        <>
            {/* <BrowserRouter> */}
                <Auth0Provider
                    domain="dev-zas6rizyxopiwv2b.us.auth0.com"
                    clientId="BOZHiKTbFJOrquI2E4QMI2qARqMW9OgC"
                    authorizationParams={{
                        redirect_uri: window.location.origin
                    }}
                >

                    <LoginButton></LoginButton>
                    <LogoutButton></LogoutButton>
                    <Profile></Profile>
                    

                    <ViewCompany />
                    <ViewShift
                        shifts={shifts}
                        setShifts={setShifts}
                    />
                    <ViewProject />
                    <ProjectForm />
                    <ShiftForm />
                </Auth0Provider>
                {/* </BrowserRouter> */}
        </>
    );
}

export default App;