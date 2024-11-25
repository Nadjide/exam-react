import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchUser } from '../../services/api/jsonplaceholder/users';
import User from '../../models/User';
import UserCard from '../../components/UserCard';
import styles from './PostOwnerPage.module.css';

const PostOwnerPage: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();
  const { userId } = useParams<{ userId: string }>();

  useEffect(() => {
    const validateAndFetchUser = async () => {
      const id = Number(userId);
      if (!Number.isInteger(id) || id <= 0) {
        navigate('/not-found', { replace: true });
        return;
      }

      try {
        const fetchedUser = await fetchUser(id);
        setUser(fetchedUser);
      } catch (error) {
        navigate('/not-found', { replace: true });
      }
    };

    validateAndFetchUser();
  }, [userId, navigate]);

  if (!user) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <UserCard user={user} />
    </div>
  );
};

export default PostOwnerPage;