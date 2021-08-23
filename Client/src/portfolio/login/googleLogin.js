import React, {useEffect} from "react";
import {GoogleLogin} from 'react-google-login';
import { google_oauth2_client_id } from 'portfolio/login/oauth2';
import axios from 'axios';
import { BACKEND_URL } from 'utils/env';
import {useDispatch, useSelector} from "react-redux";
import { useHistory } from "react-router-dom";
import {login} from "redux/action";
import { GoogleLoginStyle } from "portfolio/login/LoginStyle";

const GoogleLoginComponent = (props) => {

  const dispatch = useDispatch();
  const history = useHistory();
  const isLogin = useSelector((state) => state.user.isLogined);

  useEffect(() => {
    if(isLogin){
      history.push('/main');
    }
  }, [])

  const onSuccessHandler = async (response) => {
    const token = response.tokenObj.id_token;
    const loginRes = await axios.post(BACKEND_URL + '/google_login', {token: token});
    
    dispatch(login(loginRes.data.access_token, loginRes.data.user_id));
    history.push('/main');
  };

  const onFailureHandler = (response) => {
    history.push('/login');
  };
  
  return (
    <GoogleLoginStyle>
      <GoogleLogin 
        clientId = {google_oauth2_client_id}
        buttonText="구글 로그인"
        prompt="select_account"
        onSuccess={response => onSuccessHandler(response)}
        onFailure={response => onFailureHandler(response)}
        cookiePolicy={'single_host_origin'}
      />
    </GoogleLoginStyle>
  );
};

export default GoogleLoginComponent;