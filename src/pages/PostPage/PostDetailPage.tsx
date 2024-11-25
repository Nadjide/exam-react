import React from 'react';
import { usePost } from '../../contexts/PostContextProvider';
import styles from './PostDetailPage.module.css';

const PostDetailPage: React.FC = () => {
  const { post } = usePost();

  if (!post) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{post.title}</h2>
      <p className={styles.body}>{post.body}</p>
    </div>
  );
};

export default PostDetailPage;