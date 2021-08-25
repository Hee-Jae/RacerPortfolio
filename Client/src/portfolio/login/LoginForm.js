import React, {useState, useEffect} from "react";
import {useDispatch} from "react-redux";
import { useHistory } from "react-router-dom";
import {login} from "redux/action";
import { BACKEND_URL } from "utils/env";
import { pwRegex, emailRegex } from "utils/validation";
import { LoginFormStyle, LoginTitle, LoginButtonStyle, InputStyle, FlashMessage, GoogleLoginStyle } from "portfolio/login/LoginStyle";
import {GoogleLogin} from 'react-google-login';
import { google_oauth2_client_id } from 'portfolio/login/oauth2';
import axios from 'axios';

const LoginForm = () => {

  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [validation, setValidation] = useState(false);
  const [isBlank, setIsBlank] = useState(true);
  const [allOk, setAllOk] = useState(false);
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const loginHandler = async () => {
    setEmail('');
    setPw('');
    if(allOk){
      try{
        const response = await axios.post(BACKEND_URL + '/login',
        {email: email,
        password: pw,
        user_type: 1
        });

        dispatch(login(response.data.access_token, response.data.user_id));
        setMessage('');
        history.push(`/main`);
      } catch(error){
        setMessage('이메일과 비밀번호를 다시 확인해주세요');
      }
    } else{
      setMessage('이메일과 비밀번호를 다시 확인해주세요');
    }
  };

  const onSuccessHandler = async (response) => {
    const token = response.tokenObj.id_token;
    const loginRes = await axios.post(BACKEND_URL + '/google_login', {token: token});
    
    dispatch(login(loginRes.data.access_token, loginRes.data.user_id));
    history.push('/main');
  };

  const onFailureHandler = (response) => {
    history.push('/login');
  };

  useEffect(() => {
    if(email === '' || pw === '') setIsBlank(true);
    else setIsBlank(false);

    if(emailRegex(email) && pwRegex(pw)) setValidation(true);
    else setValidation(false);

  }, [email, pw]);

  useEffect(() => {
    if(!isBlank && validation) setAllOk(true);
    else setAllOk(false);
  }, [isBlank, validation]);

  return(
    <LoginFormStyle>
    <LoginTitle> 레이서 포트폴리오 로그인 </LoginTitle>
    <FlashMessage>{message}</FlashMessage>

      <InputStyle>
      <div>
        <input type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder="이메일"/>
      </div>
      <div>
        <input type="password" value={pw} onChange={e => setPw(e.target.value)} placeholder="비밀번호" />
      </div>
      </InputStyle>
    <LoginButtonStyle>
      <button type="submit" onClick={loginHandler}> 로그인 </button>
      <GoogleLoginStyle>
        <GoogleLogin
          clientId = {google_oauth2_client_id}
          buttonText="구글 계정으로 로그인"
          prompt="select_account"
          onSuccess={response => onSuccessHandler(response)}
          onFailure={response => onFailureHandler(response)}
          cookiePolicy={'single_host_origin'}
        />
      </GoogleLoginStyle>
    </LoginButtonStyle>
    </LoginFormStyle>
  );
}

export default LoginForm;