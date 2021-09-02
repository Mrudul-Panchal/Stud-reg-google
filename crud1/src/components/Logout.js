import React from 'react'
import {GoogleLogout} from "react-google-login";

const clientid ="c308988908933-av29e5a2dg6elk7lru1uqkno52m338lv.apps.googleusercontent.com";


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