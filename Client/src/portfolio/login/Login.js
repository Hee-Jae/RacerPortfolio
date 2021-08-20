import React, {useEffect} from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginForm from "./LoginForm";

const Login = () => {

  const history = useHistory();
  const isLogin = useSelector((state) => state.user.isLoggedIn);
  
  useEffect(() => {
    if(isLogin){
      history.push('/');
    }
  }, [])

  const registerHandler = () => {
    history.push('/register');
  };

  const googleLoginHandler = () => {
    history.push('/googlelogin');
  };

  return(
    <div>
      <LoginForm />
      <div>
        <button onClick={googleLoginHandler}> 구글계정으로 로그인</button>
      </div>
      <div>
        <button onClick={registerHandler}> 회원가입하기 </button>
      </div>
    </div>
  );
}

export default Login;