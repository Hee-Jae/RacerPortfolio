import React from 'react';
import { useSelector } from 'react-redux';
import {Award, Certificate, Edu, Profile, Project} from './contents/all-contents'
const Main = () => {
  const isLogin = useSelector((state) => state.auth);
  console.log(isLogin);
  return(
    <div>
      <h1> Main </h1>
      <Profile />
      <Edu />
      <Award />
      <Project />
      <Profile />
    </div>
  );
}

export default Main;