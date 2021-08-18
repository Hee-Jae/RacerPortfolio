import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const AwardStyle = styled.div`
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

const Award = () => {
  const auth = useSelector((state) => state.auth);
  

  return(
    <AwardStyle>
      <h2> 수상이력 </h2>
      <p> 상 이름 </p>
      <p> 한줄 소개 </p>
      <button> 수정 </button>
    </AwardStyle>
  );
}

export default Award;