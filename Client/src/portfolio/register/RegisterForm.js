import React, {useEffect, useState} from "react";
import axios from "axios";
import { BACKEND_URL } from "utils/env";
import { useHistory } from "react-router-dom";
import { pwRegex, emailRegex, nameRegex } from "utils/validation";
import { RegisterFormStyle, RegisterTitle, RegisterButtonStyle, FlashMessage } from "portfolio/register/RegisterStyle";

const RegisterForm = () => {

  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [pwCheck, setPwCheck] = useState('');
  const [userName, setUserName] = useState('');
  const [wrongPw, setWrongPw] = useState(true);
  const [isBlank, setIsBlank] = useState(true);
  const [allOk, setAllOk] = useState(false);
  const [validation, setValidation] = useState(false);
  const [validName, setValidName] = useState(false);
  const [validPw, setValidPw] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
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

    if(nameRegex(userName) && emailRegex(email) && pwRegex(pw)) setValidation(true);
    else setValidation(false);

    if(nameRegex(userName)) setValidName(true);
    else setValidName(false);

    if(emailRegex(email)) setValidEmail(true);
    else setValidEmail(false);

    if(pwRegex(pw)) setValidPw(true);
    else setValidPw(false);

  }, [email, pw, pwCheck, userName]);

  useEffect(() => {
    if(!wrongPw && !isBlank && validation) setAllOk(true);
    else setAllOk(false);
  }, [wrongPw, isBlank, validation]);


  return(
    <RegisterFormStyle>
      <RegisterTitle> RACERIN SIGNUP </RegisterTitle>
      <div>
        <input type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder="?????????"/>
        {(email !== '' && !validEmail) && <FlashMessage> ????????? ????????? ???????????? ????????????. ex) abc@domain.com </FlashMessage>}
      </div>
      <div>
        <input type="password" value={pw} onChange={e => setPw(e.target.value)} placeholder="????????????"/>
        {(pw !== '' && !validPw) && <FlashMessage> ?????? ??? ???????????? ??????????????????. <br/> 8??? ??????: ????????????, ??????, ?????? ?????? <br/> 10??? ??????: ????????????, ??????, ????????? 2?????? ?????? </FlashMessage>}
      </div>
      <div>
        <input type="password" value={pwCheck} onChange={e => setPwCheck(e.target.value)} placeholder="???????????? ??????"/>
        {(pwCheck !== '' && wrongPw) && <FlashMessage> ??????????????? ???????????? ????????????. </FlashMessage>}
      </div>
      <div>
        <input type="text" value={userName} onChange={e => setUserName(e.target.value)} placeholder="??????"/>
        {(userName !== '' && !validName) && <FlashMessage> ???????????? ?????? ?????? ??????????????? ????????? ??? ????????????. (20??? ??????)</FlashMessage>}
        {isBlank && <FlashMessage> ?????? ????????? ???????????????. </FlashMessage>}
      </div>
    <RegisterButtonStyle>
      <button onClick={registerHandler} disabled={!allOk}> ???????????? </button>
    </RegisterButtonStyle>
    </RegisterFormStyle>
  );
}

export default RegisterForm;