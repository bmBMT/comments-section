import styles from "./PrimaryButton.module.css";

const PrimaryButton = ({ children, type, ...props }) => {
  return (
    <button {...props} className={`${styles.btn} ${type}`}>
      {children}
    </button>
  );
};

export default PrimaryButton;
