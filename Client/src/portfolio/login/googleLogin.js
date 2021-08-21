import React, {useEffect} from "react";
import {GoogleLogin} from 'react-google-login';
import { google_oauth2_client_id } from './oauth2';
import axios from 'axios';
import { BACKEND_URL } from '../../utils/env';
import {useDispatch, useSelector} from "react-redux";
import { useHistory } from "react-router-dom";
import {login} from "../../redux/action";

const GoogleLoginCompnent = (props) => {

  const dispatch = useDispatch();
  const history = useHistory();
  const isLogin = useSelector((state) => state.user.isLoggedIn);

  useEffect(() => {
    if(isLogin){
      history.push('/');
    }
  }, [])

  const onSuccessHandler = async (response) => {
    const token = response.tokenObj.id_token;
    const loginRes = await axios.post(BACKEND_URL + '/google_login', {token: token});
    
    dispatch(login(loginRes.data.auth));
    history.push('/');
  };

  const onFailureHandler = (response) => {
    console.log("Failure!");
  };
  
  return (
    <div>
      <GoogleLogin 
        clientId = {google_oauth2_client_id}
        buttonText="로그인"
        prompt="select_account"
        onSuccess={response => onSuccessHandler(response)}
        onFailure={response => onFailureHandler(response)}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
};

export default GoogleLoginCompnent;