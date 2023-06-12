import Wrapper from "../Wrapper/Wrapper";
import styles from "./Modal.module.css";

const Modal = ({ children, maxWith, ...props }) => {
  return (
    <div className={styles.modal}>
      <Wrapper
        {...props}
        style={{
          padding: 24,
          maxWidth: maxWith,
        }}
      >
        {children}
      </Wrapper>
    </div>
  );
};

export default Modal;
