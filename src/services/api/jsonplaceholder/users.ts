import { rootUrl } from './index';
import User from '../../../models/User';

export const usersUrl = `${rootUrl}/users`;

export const fetchUser = async (id: number): Promise<User> => {
  const response = await fetch(`${usersUrl}/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch user');
  }
  return response.json();
};