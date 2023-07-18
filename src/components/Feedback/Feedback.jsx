import css from './Feedback.module.css';
import PropTypes from 'prop-types';

export const Feedback = ({ values, addFeedback }) => {
  return (
    <div class={css.buttonList}>
      {values.map(value => (
        <button
          type="button"
          key={value}
          onClick={() => addFeedback(value)}
          className={css.buttonItem}
        >
          {value}
        </button>
      ))}
    </div>
  );
};
Feedback.propTypes = {
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
  addFeedback: PropTypes.func.isRequired,
};
