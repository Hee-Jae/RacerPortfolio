import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import {Award, Certificate, Edu, Profile, Project} from 'portfolio/contents/all-contents'
import styled from 'styled-components';
import axios from 'axios';
import {BACKEND_URL} from 'utils/env';

const MainStyle = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 40%;
  margin: 0 auto;
`;

const Main = () => {

  const access_token = useSelector((state) => state.user.access_token);
  const user_id = useSelector((state) => state.user.user_id);
  const queryParams = new URLSearchParams(window.location.search);
  const post_id = queryParams.get('user');

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
    const response = await axios.get(BACKEND_URL + `/posts?user=${post_id}`, header);
    setUserId(response.data.user_id);
    setProfileData(response.data.profile);
    setEduData(response.data.edus);
    setAwardData(response.data.awards);
    setProjectData(response.data.projects);
    setCertificateData(response.data.certificates);
    setIsFetched(true);
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