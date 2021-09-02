import React from 'react'
import {GoogleLogout} from "react-google-login";

const clientid ="109864172924-olf4l8gk32v89jhv6jpbccu94khfdg43.apps.googleusercontent.com";


function Logout() {
    const onSuccess =(res)=>{
       alert('Logout made successfully');
    };
    
    return (
        <div>
            <GoogleLogout 
            clientId={clientid}
            buttonText= "Logout"
            onLogoutSuccess={onSuccess}/>
            </div>
    )
}

export default Logout;