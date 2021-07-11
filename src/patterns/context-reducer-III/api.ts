// STEP 0：建立會被呼叫的 API
import { UserType } from './reducer';

export const apiFetchUsers = async (): Promise<UserType[]> => {
  // eslint-disable-next-line no-console
  console.log('[API] apiFetchUsers');
  const resp = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!resp.ok) {
    throw new Error('Bad response');
  }
  const data = (await resp.json()) as UserType[];
  return data;
};
