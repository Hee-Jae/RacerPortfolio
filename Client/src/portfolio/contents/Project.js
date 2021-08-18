import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const ProjectStyle = styled.div`
  border: solid 3px grey;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 15px;

  & > button{
    width: 30%;
    margin: 0 auto;
  }
`;

const Project = () => {

  return(
    <ProjectStyle>
      <h2> 프로젝트 </h2>
      <p> 프로젝트명 </p>
      <p> 한줄 소개 </p>
      <p> 날짜 </p>
      <p> 프로젝트 url</p>
      <button> 수정 </button>
    </ProjectStyle>
  );
}

export default Project;