import styles from "./index.module.scss";

const PopUp = ({ children }) => {
  return (
    <div className={styles.PopUp}>
      <p className={styles.children}>{children}</p>
    </div>
  );
};

export default PopUp;
