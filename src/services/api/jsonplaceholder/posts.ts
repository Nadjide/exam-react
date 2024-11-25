import { rootUrl } from './index';
import Post from '../../../models/Post';

export const postsUrl = `${rootUrl}/posts`;

export const fetchPosts = async (): Promise<Post[]> => {
  const response = await fetch(postsUrl);
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  return response.json();
};

export const fetchPost = async (id: number): Promise<Post> => {
  const response = await fetch(`${postsUrl}/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch post');
  }
  return response.json();
};