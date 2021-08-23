import React, {useEffect, useState} from "react";
import axios from "axios";
import { BACKEND_URL } from "utils/env";
import { useHistory } from "react-router-dom";


const RegisterForm = () => {

  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [pwCheck, setPwCheck] = useState('');
  const [userName, setUserName] = useState('');
  const [wrongPw, setWrongPw] = useState(true);
  const [isBlank, setIsBlank] = useState(true);
  const [allOk, setAllOk] = useState(false);
  const history = useHistory();

  const registerHandler = async () => {
    if(allOk){
      try{
        const response = await axios.post(BACKEND_URL + "/register",
          {email: email,
          password: pw,
          password_check: pwCheck,
          name: userName,
          user_type: 1});
        history.push('/login');
      } catch(error){
        console.log(error.response);
      }
    }
  }

  useEffect(() => {
    if(pw !== pwCheck) setWrongPw(true);
    else setWrongPw(false);
  }, [pw, pwCheck]);

  useEffect(() => {
    if(email === '' || pw === '' || pwCheck === '' || userName === '') setIsBlank(true);
    else setIsBlank(false);
  }, [email, pw, pwCheck, userName]);

  useEffect(() => {
    if(!wrongPw && !isBlank) setAllOk(true);
    else setAllOk(false);
  }, [wrongPw, isBlank]);

  return(
    <>
    <form>
      <p>아이디</p><input type="text" value={email} onChange={e => setEmail(e.target.value)} />
      <p>비밀번호</p><input type="password" value={pw} onChange={e => setPw(e.target.value)} />
      <p>비밀번호 확인</p><input type="password" value={pwCheck} onChange={e => setPwCheck(e.target.value)} />
      {(pwCheck !== '' && wrongPw) && <p style={{color:'red'}}> 비밀번호가 일치하지 않습니다. </p>}
      <p>이름</p><input type="text" value={userName} onChange={e => setUserName(e.target.value)} />
      {isBlank && <p style={{color:'red'}}> 모든 항목을 채워주세요. </p>}
    </form>
    <button type="submit" onClick={registerHandler}> 회원가입 </button>
    </>
  );
}

export default RegisterForm;