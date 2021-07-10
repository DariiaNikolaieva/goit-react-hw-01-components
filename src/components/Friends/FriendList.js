import React from "react";
import PropTypes from "prop-types";
import FriendListItem from "./FriendListItem";
import styles from "./FriendList.module.css";

const FriendList = ({ friends }) => (
  <>
    <h2 className={styles.title}>Task 3. List of Friends</h2>
    <ul>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
      ))}
    </ul>
  </>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ).isRequired,
};

export default FriendList;
