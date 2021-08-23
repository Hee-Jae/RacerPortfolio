import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import axios from "axios";
import CertificateContents from 'portfolio/contents/Certificate/CertificateContents';
import CertificateForm from 'portfolio/contents/Certificate/CertificateForm';
import { BACKEND_URL } from 'utils/env';
import { header } from 'utils/header';
import moment from 'moment';

const CertificateStyle = styled.div`
  border: solid 3px grey;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 15px;

  button{
    width: 30%;
    margin: 0 auto;
  }
`;

const CertificateButtonWrapper = styled.div`
  margin-top: 20px;
`;

const Certificate = (props) => {

  const [edit, setEdit] = useState(false);
  const [certificateData, setCertificateData] = useState(props.certificateData);
  const [copyCertificateData, setCopyCertificateData] = useState(props.certificateData);
  const [newIndex, setNewIndex] = useState(0);
  const [deleteList, setDeleteList] = useState([]);

  const access_token = useSelector((state) => state.user.access_token);
  const user_id = useSelector((state) => state.user.user_id);

  const editTriggerHandler = () => {
    setCopyCertificateData(certificateData);
    setEdit(true);
  };

  const editCancelHandler = () => {
    setCertificateData(copyCertificateData);
    setEdit(false);
    setNewIndex(0);
    setDeleteList([]);
  };

  const editCompleteHandler = async () => {
    const deleteResponse = await axios.post(BACKEND_URL + '/certificates/delete', deleteList.filter(item => item > 0), header(access_token));
    const response = await axios.put(BACKEND_URL + '/certificates', certificateData, header(access_token));
    setCertificateData(response.data);
    setEdit(false);
    setNewIndex(0);
    setDeleteList([]);
  };

  const addCertificateDataHandler = () => {
    const newCertificateData = certificateData.concat({
      id: newIndex,
      name: '',
      agency: '',
      date: moment(new Date()).format('YYYY-MM-DD'),
      user_id: props.userId
    });
    setNewIndex(newIndex - 1);
    setCertificateData(newCertificateData);
  };
  
  return(
    <CertificateStyle>
      <h2> 자격증 </h2>
      {edit ? 
        <div>
          {certificateData.map(element => {
            return(
            <CertificateForm key={element.id}
            formId={element.id}
            formName={element.name} 
            formAgency={element.agency}
            formDate={element.date}
            formUserId={element.user_id}
            certificateData={certificateData}
            setCertificateData={setCertificateData}
            deleteList={deleteList}
            setDeleteList={setDeleteList} /> );
          })}
          
          <CertificateButtonWrapper>
            <button onClick={editCompleteHandler}> 완료 </button>
            <button onClick={editCancelHandler}> 취소 </button>
            <button onClick={addCertificateDataHandler}> 추가 </button>
          </CertificateButtonWrapper>
        </div> :
        <div>
          {certificateData.map(element => {
            return(
            <CertificateContents key={element.id}
            certificateId={element.id}
            certificateName={element.name} 
            certificateAgency={element.agency}
            certificateDate={element.date} /> );
          })}
          <CertificateButtonWrapper>
          {user_id === props.userId && <button onClick={editTriggerHandler}> 수정 </button>}
          </CertificateButtonWrapper>
        </div>
      }
    </CertificateStyle>
  );
}

export default Certificate;