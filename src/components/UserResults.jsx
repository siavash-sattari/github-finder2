import { useEffect } from 'react';
import { useGithub } from '../context/GithubContext';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';

function UserResults() {
  const { users, loading, fetchUsers } = useGithub();

  useEffect(() => {
    fetchUsers();
  }, []);

  return loading ? (
    <Spinner />
  ) : (
    <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
      {users?.map(user => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UserResults;
