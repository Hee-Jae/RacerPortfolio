import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const CertificateStyle = styled.div`
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

const Certificate = () => {
  const auth = useSelector((state) => state.auth);
  

  return(
    <CertificateStyle>
      <h2> 자격증 </h2>
      <p> 자격증 이름 </p>
      <p> 발급기관 </p>
      <p> 날짜 </p>
      <button> 수정 </button>
    </CertificateStyle>
  );
}

export default Certificate;