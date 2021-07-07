import React from "react";
import PropTypes from "prop-types";
import styles from "../FriendList/FriendList.module.css";

const Friends = ({ avatar, name, isOnline }) => (
  <div className={styles.item}>
    <span className={isOnline ? styles.status : styles.statusOffline}></span>
    <img className={styles.avatar} src={avatar} alt={name} width="48" />
    <p className={styles.name}>{name}</p>
  </div>
);

Friends.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default Friends;
