import React from 'react';
import User from '../models/User';
import styles from './UserCard.module.css';

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.name}>{user.name}</h2>
      <p className={styles.username}>{user.username}</p>
      <p className={styles.email}>{user.email}</p>
    </div>
  );
};

export default UserCard;