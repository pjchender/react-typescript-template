/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable no-console */
import { useUser } from 'patterns/context-reducer-III/user-context';
import { useEffect } from 'react';

const UserList = (): JSX.Element => {
  // STEP 6: 從 useUser 中取得 state 和 actions
  const { state, actions } = useUser();
  const { users } = state;
  const { fetchUsers, deleteUser } = actions;

  useEffect(() => {
    console.log('[Users] fetchUsers');

    fetchUsers().catch((error: unknown) => {
      console.log('[UserList] fetchUsers failed', { error });
    });
  }, [fetchUsers]);

  return (
    <div>
      <button type="button" onClick={() => fetchUsers()}>
        Fetch Users
      </button>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name}
            <button type="button" onClick={() => deleteUser(user.id)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
