import React from "react";
import PropTypes from "prop-types";

import FollowersIcon from "./SVG/Followers";
import ViewsIcon from "./SVG/Views";
import LikesIcon from "./SVG/Likes";

import styles from "./Profile.module.css";

const Profile = ({ name, tag, location, avatar, stats }) => {
  const { followers, views, likes } = stats;
  return (
    <div className={styles.profile}>
      <h2 className={styles.title}>Task 1. Social Profile</h2>
      <div className={styles.description}>
        <img
          src={avatar}
          alt="Аватар пользователя"
          className={styles.avatar}
          width="250"
        />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>
      <ul className={styles.stats}>
        <li className={styles.statsItem}>
          <span className={(styles.label, styles.followers)}>Followers </span>
          <FollowersIcon />
          <span className={styles.quantity}>{followers}</span>
        </li>
        <li className={styles.statsItem}>
          <span className={styles.label}>Views </span>
          <ViewsIcon />
          <span className={styles.quantity}>{views}</span>
        </li>
        <li className={styles.statsItem}>
          <span className={styles.label}>Likes </span>
          <LikesIcon />
          <span className={styles.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
