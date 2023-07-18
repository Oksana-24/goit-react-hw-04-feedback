import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <p className={css.statisticsText}>Good: {good}</p>
      <p className={css.statisticsText}>Neutral: {neutral}</p>
      <p className={css.statisticsText}>Bad: {bad}</p>
      <p className={css.statisticsTotal}>Total: {total}</p>
      <p className={css.statisticsTotal}>
        Positive feedback:
        {Number.isNaN(positivePercentage) ? '-' : positivePercentage}%
      </p>
    </>
  );
};
StaticRange.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
