import styles from "./index.module.scss";
import { useRef } from "react";

const PreservationModal = ({ setPreservation }) => {
  const surname = useRef("");

  const date = useRef("");

  const hour = useRef("");

  const reserve = (e) => {
    e.preventDefault();
    console.log({
      Surname: surname.current.value,
      Date: date.current.value,
      hour: hour.current.value,
    });
    disactivate();
  };

  const disactivate = () => {
    setPreservation(() => false);
  };

  return (
    <div className={styles.PreservationModal}>
      <div onClick={disactivate} className={styles.overlay}></div>
      <form onSubmit={reserve} className={styles.preservation}>
        <h3>Preserve</h3>
        <input ref={surname} type="text" placeholder="Surname" />
        <input ref={date} type="date" />
        <input ref={hour} type="time" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default PreservationModal;
