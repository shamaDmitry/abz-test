import { useEffect, useState } from 'react';
import { API_URL } from '../../helpers/const';
import Preloader from '../Base/Preloader';
import Button from '../Shared/Button';
import UserCard from '../Shared/UserCard';
import { orderBy } from 'lodash';

const UserList = ({ shouldUserUpdate }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [nextLink, setNextLink] = useState("");

  const getUsers = (url) => {
    setIsLoading(true);

    fetch(url)
      .then(res => res.json())
      .then(res => {
        setIsLoading(false);
        setNextLink(res.links.next_url);
        if (res.page === res.total_pages) {
          setNextLink(null);
        }

        const result = orderBy([
          ...data,
          ...res.users
        ], ['registration_timestamp'], ['desc']);

        setData(result);
      })
  }

  useEffect(() => {
    setData([]);
    getUsers(`${API_URL}/users?page=1&count=6`);
    return () => { };
  }, [shouldUserUpdate]);

  if (isLoading) return <Preloader className="text-[#00BDD3] w-[48px] h-[48px]" />

  return (
    <>
      <div className="gap-[29px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-[50px]">
        {data?.map(user => {
          return <UserCard
            key={user.id}
            data={user}
          />
        })}
      </div>

      <div className="text-center">
        {
          nextLink && <Button
            onClick={() => getUsers(nextLink)}
            color="yellow"
          >
            Show more
          </Button>
        }
      </div>
    </>
  );
}

export default UserList;
