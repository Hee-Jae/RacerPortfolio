import React from 'react';
import {
  Navbar,
  Nav,
  Container
} from 'react-bootstrap';

import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/action';
import { NavStyle } from 'portfolio/NavStyle';

const NavComponent = (props) => {

  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.user.isLogined);

  const logoutHandler = () => {
    dispatch(logout());
  }

  return (
    <NavStyle>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand> Racerin </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Link to="/main" className="nav-link">메인</Link>
            <Link to="/network" className="nav-link">네트워크</Link>
            {isLogin ?
            (<Link to="/login" className="nav-link" onClick={logoutHandler}>로그아웃</Link>) :
            (<><Link to="/login" className="nav-link">로그인</Link>
              <Link to="/register" className="nav-link">회원가입</Link></>)}
            </Nav>
          </Navbar.Collapse>
        </Container>
        </Navbar>
    </NavStyle>
  );
}

export default NavComponent;