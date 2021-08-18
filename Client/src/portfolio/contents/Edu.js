import React from 'react';
import { useSelector } from 'react-redux';

import styled from 'styled-components';

const EduStyle = styled.div`
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

const Edu = () => {
  const auth = useSelector((state) => state.auth);
  

  return(
    <EduStyle>
      <h2> 학력 </h2>
      <p> 대학교 </p>
      <p> 전공 </p>
      <button> 수정 </button>
    </EduStyle>
  );
}

export default Edu;