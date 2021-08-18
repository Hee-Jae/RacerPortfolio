import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const ProfileStyle = styled.div`
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

const Profile = () => {

  return(
    <ProfileStyle>
      <img></img>
      <p> 이름 </p>
      <span> 한줄 소개 </span>
      <button> 수정 </button>
    </ProfileStyle>
  );
}

export default Profile;