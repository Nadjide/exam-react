import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { usePost } from '../../contexts/PostContextProvider';
import styles from './PostPage.module.css';

const PostPage: React.FC = () => {
  const { post } = usePost();

  if (!post) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        <Link to="detail">View Details</Link>
        <Link to={`owner/${post.userId}`}>View Author</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default PostPage;