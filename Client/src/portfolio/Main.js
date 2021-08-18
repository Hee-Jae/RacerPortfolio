import React from 'react';
import { useSelector } from 'react-redux';
import {  } from 'redux-persist'
import {Award, Certificate, Edu, Profile, Project} from './contents/all-contents'
const Main = () => {
  const auth = useSelector((state) => state.user.auth);
  // const auth_info = window.localStorage.getItem(auth);

  console.log(auth);
  return(
    <div>
      <h1> Main </h1>
      <Profile />
      <Edu />
      <Award />
      <Project />
      <Certificate />
    </div>
  );
}

export default Main;