import { useState } from 'react';
import { useAlert } from '../context/AlertContext';
import { useGithub } from '../context/GithubContext';
import { searchUsers } from '../context/GithubActions';

function UserSearch() {
  const [text, setText] = useState('');

  const { users, dispatch } = useGithub();
  const { setAlert } = useAlert();

  const handleChange = e => setText(e.target.value);

  const handleSubmit = async e => {
    e.preventDefault();

    if (text === '') {
      setAlert('Please enter something', 'error');
    } else {
      dispatch({ type: 'SET_LOADING' });
      const users = await searchUsers(text);
      dispatch({ type: 'GET_USERS', payload: users });
      setText('');
    }
  };

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 mb-8 gap-8'>
      <div>
        <form onSubmit={handleSubmit}>
          <div className='form-control'>
            <div className='relative'>
              <input
                type='text'
                className='w-full pr-40 bg-gray-200 input input-lg text-black focus:outline-none'
                placeholder='Search'
                value={text}
                onChange={handleChange}
              />
              <button type='submit' className='absolute top-0 right-0 rounded-l-none w-36 btn btn-lg'>
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button onClick={() => dispatch({ type: 'CLEAR_USERS' })} className='btn btn-outline btn-lg'>
            Clear
          </button>
        </div>
      )}
    </div>
  );
}

export default UserSearch;
