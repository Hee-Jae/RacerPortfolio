import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import axios from "axios";
import AwardContents from 'portfolio/contents/Award/AwardContents';
import AwardForm from 'portfolio/contents/Award/AwardForm';
import { BACKEND_URL } from 'utils/env';
import { header } from 'utils/header';

const AwardStyle = styled.div`
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

const AwardButtonWrapper = styled.div`
  margin-top: 20px;
`

const Award = (props) => {
  
  const [edit, setEdit] = useState(false);
  const [awardData, setAwardData] = useState(props.awardData);
  const [copyAwardData, setCopyAwardData] = useState(props.awardData);
  const [newIndex, setNewIndex] = useState(0);
  const [deleteList, setDeleteList] = useState([]);

  const access_token = useSelector((state) => state.user.access_token);
  const user_id = useSelector((state) => state.user.user_id);

  const editTriggerHandler = () => {
    setCopyAwardData(awardData);
    setEdit(true);
  };

  const editCancelHandler = () => {
    setAwardData(copyAwardData);
    setEdit(false);
    setNewIndex(0);
    setDeleteList([]);
  };

  const editCompleteHandler = async () => {
    const deleteResponse = await axios.post(BACKEND_URL + '/awards/delete', deleteList.filter(item => item > 0), header(access_token));
    const response = await axios.put(BACKEND_URL + '/awards', awardData, header(access_token));
    setAwardData(response.data);
    setEdit(false);
    setNewIndex(0);
    setDeleteList([]);
  };

  const addAwardDataHandler = () => {
    const newAwardData = awardData.concat({id: newIndex, name: '', description: '', user_id: props.userId});
    setNewIndex(newIndex - 1);
    setAwardData(newAwardData);
  };
  
  return(
    <AwardStyle>
      <h2> 수상이력 </h2>
      {edit ? 
        <div>
          {awardData.map(element => {
            return(
            <AwardForm key={element.id}
            formId={element.id}
            formName={element.name} 
            formDescription={element.description}
            formUserId={element.user_id}
            awardData={awardData}
            setAwardData={setAwardData}
            deleteList={deleteList}
            setDeleteList={setDeleteList} /> );
          })}
          
          <AwardButtonWrapper>
            <button onClick={editCompleteHandler}> 완료 </button>
            <button onClick={editCancelHandler}> 취소 </button>
            <button onClick={addAwardDataHandler}> 추가 </button>
          </AwardButtonWrapper>
        </div> :
        <div>
          {awardData.map(element => {
            return(
            <AwardContents key={element.id}
            awardId={element.id}
            awardName={element.name} 
            awardDescription={element.description} /> );
          })}
          <AwardButtonWrapper>
          {user_id === props.userId && <button onClick={editTriggerHandler}> 수정 </button>}
          </AwardButtonWrapper>
        </div>
      }
    </AwardStyle>
  );
}

export default Award;