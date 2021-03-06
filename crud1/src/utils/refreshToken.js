export const refreshTokenSetup = (res)=>{
    let SetTimeout;
    let refreshTimming =(res.tokenObj.expires_in || 3600-5*60 )*1000;

    const refreshToken=async()=>{
        const newAuthRes = await res.reloadAuthResponse();
        refreshTimming=(newAuthRes.expires_in || 3600 -5 *60 )*1000;
        console.log('newAuthRes:',newAuthRes);
        console.log('new auth Token ',newAuthRes.id_token);
        SetTimeout(refreshToken,refreshTimming);
    };
    SetTimeout(refreshToken,refreshTimming);
};