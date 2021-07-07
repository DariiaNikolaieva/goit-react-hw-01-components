import React from "react";
import PropTypes from "prop-types";
import Friends from "../Friends/Friends";
import styles from "./FriendList.module.css";

const FriendList = ({ friends }) => (
  <>
    <h2 className={styles.title}>Task 3. List of Friends</h2>
    <ul>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li className={styles.listItem} key={id}>
          <Friends avatar={avatar} name={name} isOnline={isOnline} />
        </li>
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
