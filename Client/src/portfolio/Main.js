import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import {Award, Certificate, Edu, Profile, Project} from './contents/all-contents'
import styled from 'styled-components';
import axios from 'axios';
import {BACKEND_URL} from '../env';

const MainStyle = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 40%;
  margin: 0 auto;
`;

const Main = () => {

  const access_token = useSelector((state) => state.user.access_token);
  const header = {
    headers : {
      'Content-Type' : "application/json",
      'Authorization' : `Bearer ${access_token}`,
    }
  };

  const [userId, setUserId] = useState();
  const [profileData, setProfileData] = useState({});
  const [eduData, setEduData] = useState([]);
  const [awardData, setAwardData] = useState([]);
  const [projectData, setProjectData] = useState([]);
  const [certificateData, setCertificateData] = useState([]);
  const [isFetched, setIsFetched] = useState(false);

  useEffect( async () => {
    const response = await axios.get(BACKEND_URL + '/posts', header);
    setUserId(response.data.user_id);
    setProfileData(response.data.profile);
    setEduData(response.data.edus);
    setAwardData(response.data.awards);
    setProjectData(response.data.projects);
    setCertificateData(response.data.certificates);
    setIsFetched(true);
    console.log("Main Called !");
  }, []);

  
  return(
    <MainStyle>
      {isFetched ? 
        <div>
          <Profile profileData={profileData} setProfileData={setProfileData} userId={userId} />
          <Edu eduData={eduData} setEduData={setEduData} userId={userId} />
          <Award awardData={awardData} setAwardData={setAwardData} userId={userId} />
          <Project projectData={projectData} setProjectData={setProjectData} userId={userId} />
          <Certificate certificateData={certificateData} setCertificateData={setCertificateData} userId={userId}/>
        </div>:
        <div> Loading... </div> 
      }
    </MainStyle>
  );
}

export default Main;