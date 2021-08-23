import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { useHistory } from "react-router-dom";
import {login} from "redux/action";
import { BACKEND_URL } from "utils/env";
import axios from 'axios';
import styled from "styled-components";

const LoginFormStyle = styled.div`
  width: 80%;
  margin: 0 auto;
  border: solid 2px blue;
`;

const LoginForm = () => {

  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const loginHandler = async () => {
    try{
      const response = await axios.post(BACKEND_URL + '/login',
      {email: email,
      password: pw,
      user_type: 1
      });

      dispatch(login(response.data.access_token, response.data.user_id));
      history.push(`/main`);
    } catch(error){
      console.log(error.response);
    }
  };

  return(
    <LoginFormStyle>
    <form>
      <p>아이디</p><input type="text" value={email} onChange={e => setEmail(e.target.value)} />
      <p>비밀번호</p><input type="password" value={pw} onChange={e => setPw(e.target.value)} />
    </form>
    <button type="submit" onClick={loginHandler}> 로그인 </button>
    </LoginFormStyle>
  );
}

export default LoginForm;