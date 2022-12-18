import PropTypes from 'prop-types';
import css from 'components/Section/Section.module.css'


export const Section = ({ title, children }) => {
    return (
        <div>
            <title className={css.title}>{title}</title>
            {children}
    </div>
    )
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};