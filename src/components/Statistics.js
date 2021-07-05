import React from "react";
import PropTypes from "prop-types";

const Statistics = ({ title, stats }) => {
  return (
    <div>
      <section class="statistics">
        {title && <h2 class="title">{title}</h2>}
        <ul class="stat-list">
          {stats.map((elem) => {
            const { id, label, percentage } = elem;
            return (
              <li class="item" key={id}>
                <span class="label">{label}</span>
                <span class="percentage">{percentage} %</span>
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
