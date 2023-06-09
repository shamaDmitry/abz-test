import useSWR from 'swr';
import { API_URL } from '../helpers/const.js';
import { fetcher } from '../helpers/fetcher.js';

export const useUsers = () => {
  const { data, error, isLoading } = useSWR(`${API_URL}/users?page=1&count=6`, fetcher)

  console.log('asdsa', data);
  

  return {
    users: data,
    isLoading,
    isError: error
  }
}