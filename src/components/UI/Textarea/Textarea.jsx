import { forwardRef } from "react";
import styles from "./Textarea.module.css";

function setCursorAtEnd(e) {
  e.target.selectionStart = e.target.value.length;
}

const Textarea = forwardRef((props, ref) => {
  return (
    <textarea ref={ref} {...props} className={styles.textarea} autoFocus onFocus={setCursorAtEnd}></textarea>
  );
});

export default Textarea;
