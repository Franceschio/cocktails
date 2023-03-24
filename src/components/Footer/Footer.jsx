import styles from "./index.module.scss";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <ul className={styles.footerList}>
        <li>About us</li>
        <li>Contacts</li>
        <li>Join our team!</li>
      </ul>
    </div>
  );
};

export default Footer;
