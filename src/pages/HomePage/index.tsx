import { Link } from 'react-router-dom';
import { fetchPosts } from '../../services/api/jsonplaceholder/posts';
import React, { useState, useEffect } from 'react';
import styles from './HomePage.module.css';

interface Post {
  id: number;
  title: string;
}

const HomePage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const postsData = await fetchPosts();
        setPosts(postsData);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred');
        }
      }
    };

    getPosts();
  }, []);

  return (
    <div className={styles.container}>
      {error && <p className={styles.error}>{error}</p>}
      <ul className={styles.postList}>
        {posts.map(post => (
          <li key={post.id} className={styles.postItem}>
            <h2>{post.title}</h2>
            <Link to={`/posts/${post.id}`}>Read more</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;