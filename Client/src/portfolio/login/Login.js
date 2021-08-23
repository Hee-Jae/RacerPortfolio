import React, {useEffect} from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginForm from "portfolio/login/LoginForm";
import { LoginStyle } from "portfolio/login/LoginStyle";

const Login = () => {

  const history = useHistory();
  const isLogin = useSelector((state) => state.user.isLogined);
  const user_id = useSelector((state) => state.user.user_id);
  
  useEffect(() => {
    if(isLogin){
      console.log("already logined!");
      history.push(`/main?user=${user_id}`);
    }
  }, [])

  return(
    <LoginStyle>
      <LoginForm />
    </LoginStyle>
  );
}

export default Login;