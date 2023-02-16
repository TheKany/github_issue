import axios from 'axios';

import { GITHUB_API } from '../constants';
import { useQuery } from 'react-query';

const getUserInfo = async () => {
  const data = await axios.get(`${GITHUB_API}/user`, {
    headers: {
      Authorization: process.env.REACT_APP_GITHUB_TOKEN,
      'Content-Type': 'application/json',
    },
  });

  return data.data;
};

export const useUser = () => {
  return useQuery(['useInfo'], () => getUserInfo(), { staleTime: 'Infinity' });
};
