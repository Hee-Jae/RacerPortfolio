import React, {useEffect} from 'react';
import SearchBar from './SearchBar';
import Posts from './Posts';
import axios from 'axios';
import { BACKEND_URL } from '../utils/env';
import { useSelector } from 'react-redux';
const Network = () => {
  const access_token = useSelector((state) => state.user.access_token);
  const header = {
    headers : {
      'Content-Type' : "application/json",
      'Authorization' : `Bearer ${access_token}`,
    }
  };

  useEffect( async () => {
    const response = await axios.post(BACKEND_URL + '/network', '', header);
  }, []);

  return(
    <div>
      <h1> Network </h1>
      <SearchBar />
      <Posts />
    </div>
  );
}

export default Network;