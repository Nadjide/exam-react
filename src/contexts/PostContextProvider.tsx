import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Post from '../models/Post';
import { fetchPost } from '../services/api/jsonplaceholder/posts';

type PostContextType = {
  post: Post | null;
};

const PostContext = createContext<PostContextType>({ post: null });

export const usePost = () => useContext(PostContext);

const PostContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [post, setPost] = useState<Post | null>(null);
  const navigate = useNavigate();
  const { postId } = useParams<{ postId: string }>();

  useEffect(() => {
    const validateAndFetchPost = async () => {
      const id = Number(postId);
      if (!Number.isInteger(id) || id <= 0) {
        navigate('/not-found', { replace: true });
        return;
      }

      try {
        const fetchedPost = await fetchPost(id);
        setPost(fetchedPost);
      } catch (error) {
        navigate('/not-found', { replace: true });
      }
    };

    validateAndFetchPost();
  }, [postId, navigate]);

  return (
    <PostContext.Provider value={{ post }}>
      {children}
    </PostContext.Provider>
  );
};

export default PostContextProvider;