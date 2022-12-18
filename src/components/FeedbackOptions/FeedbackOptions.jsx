import PropTypes from 'prop-types';

import css from 'components/FeedbackOptions/FeedbackOptions.module.css'

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <ul className={css.list}>
        {options.map(option => {
            return (
            <li key={option}>
            <button  type="button" onClick={() => onLeaveFeedback(option)}>
            {option}
            </button>
            </li>
            )
            })
        }
        </ul>
    )
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};