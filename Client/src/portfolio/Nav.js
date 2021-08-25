import React from 'react';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/action';
import { NavStyle, NavBrand, NavItem } from 'portfolio/NavStyle';

const NavComponent = (props) => {

  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.user.isLogined);

  const logoutHandler = () => {
    dispatch(logout());
  }

  return (
    <NavStyle>
      <NavBrand>
        <span> RACERIN </span>
      </NavBrand>
      <NavItem>
        {isLogin ?
        <>
        <Link to="/login" className="nav-link" onClick={logoutHandler}>로그아웃</Link>
        <Link to="/network" className="nav-link">네트워크</Link>
        <Link to="/main" className="nav-link">메인</Link></> :
        <><Link to="/login" className="nav-link">로그인</Link>
          <Link to="/register" className="nav-link">회원가입</Link></>}
      </NavItem>
    </NavStyle>
  );
}

export default NavComponent;