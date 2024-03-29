import React from "react";
import PropTypes from "prop-types";

import styles from "./Statistics.module.css";

const Statistics = ({ title, stats }) => {
  return (
    <div className={styles.statisticsContainer}>
      <h2 className={styles.title}>Task 2. Statistics</h2>
      <section className={styles.statistics}>
        {title && <h2 className={styles.title}>{title}</h2>}
        <ul className={styles.statList}>
          {stats.map(({ id, label, percentage }) => {
            return (
              <li className={styles.item} key={id}>
                <span className={styles.label}>{label} </span>
                <span className={styles.percentage}>{percentage} %</span>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default Statistics;

Statistics.defaultProps = {
  title: "",
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
