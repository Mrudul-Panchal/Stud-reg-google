import React from 'react'
import {GoogleLogin} from "react-google-login";
import { refreshTokenSetup} from '../utils/refreshToken';
import "../App.css";
const clientid ="109864172924-olf4l8gk32v89jhv6jpbccu94khfdg43.apps.googleusercontent.com";


function Login() {
    const onSuccess =(res)=>{
        console.log('[Login Success] currentUser:',res.profileObj);
        refreshTokenSetup(res);
    };
    const onFailuer =(res)=>{
        console.log('[Login failed] res:',res);
    };
    return (
        <div>
            <GoogleLogin className="google"
            clientId={clientid}
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailuer}
            cookiePolicy={'single_host_origin'}
            style={{ marginTop : '100px'},{color:'blue'}}
            isSignedIn={true}
            />
            </div>
    )
}

export default Login;
