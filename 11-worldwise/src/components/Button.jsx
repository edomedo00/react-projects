import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ children, onClick, type }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.btn} ${styles[type]}`}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

Button.defaultProps = {
  onClick: undefined,
  type: "button",
};

export default Button;
