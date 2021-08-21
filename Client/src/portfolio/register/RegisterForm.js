import React, {useState} from "react";
import axios from "axios";
import { BACKEND_URL } from "../../utils/env";
import { useHistory } from "react-router-dom";


const RegisterForm = () => {

  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [pwCheck, setPwCheck] = useState('');
  const [userName, setUserName] = useState('');

  const history = useHistory();

  const registerRequest = async () => {
    const response = await axios.post(BACKEND_URL + "/register",
    {email: email,
    password: pw,
    name: userName,
    type: 1});

    console.count(response);
  }

  const registerHandler = () => {
    registerRequest();
    history.push('/login');
  }
  return(
    <>
    <form>
      <p>아이디</p><input type="text" value={email} onChange={e => setEmail(e.target.value)} />
      <p>비밀번호</p><input type="password" value={pw} onChange={e => setPw(e.target.value)} />
      <p>비밀번호 확인</p><input type="password" value={pwCheck} onChange={e => setPwCheck(e.target.value)} />
      <p>이름</p><input type="text" value={userName} onChange={e => setUserName(e.target.value)} />
    </form>
    <button type="submit" onClick={registerHandler}> 회원가입 </button>
    </>
  );
}

export default RegisterForm;