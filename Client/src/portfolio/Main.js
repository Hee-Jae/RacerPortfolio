import React from 'react';
import { useSelector } from 'react-redux';
import {Award, Certificate, Edu, Profile, Project} from './contents/all-contents'
import styled from 'styled-components';

const MainStyle = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 40%;
  margin: 0 auto;
`;


const Main = () => {
  const access_token = useSelector((state) => state.user.access_token);

  console.log(access_token);
  return(
    <MainStyle>
      <Profile />
      <Edu />
      <Award />
      <Project />
      <Certificate />
    </MainStyle>
  );
}

export default Main;