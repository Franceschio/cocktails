import styles from "./index.module.scss";
import { useRef } from "react";

const PreservationModal = ({
  setPreservation,
  setMsg,
  setPreservations,
  allPreservations,
}) => {
  const surname = useRef("");

  const date = useRef("");

  const hour = useRef("");

  const reserve = (e) => {
    e.preventDefault();
    const newPreservation = {
      urname: surname.current.value,
      date: date.current.value,
      hour: hour.current.value,
    };

    if (
      !allPreservations.find(
        (preservation) =>
          preservation.date === newPreservation.date &&
          preservation.hour === newPreservation.hour
      )
    ) {
      console.log(newPreservation);
      setPreservations((prev) => [...prev, newPreservation]);
      setMsg(
        `Tavolo prenotato per giorno ${date.current.value} alle ore ${hour.current.value} sotto il nome di ${surname.current.value}!`
      );
    } else {
      setMsg(
        `Ci dispiace, il tavolo per giorno ${date.current.value} alle ore ${hour.current.value} risulta già prenotato!`
      );
      setPreservations((prev) => [...prev]);
    }
    disactivate();
  };

  const disactivate = () => {
    setPreservation(() => false);
  };

  return (
    <div className={styles.PreservationModal}>
      <div onClick={disactivate} className={styles.overlay}></div>
      <form onSubmit={reserve} className={styles.preservation}>
        <h3>Prenota ora!</h3>
        <input ref={surname} type="text" placeholder="Surname" />
        <input ref={date} type="date" />
        <input ref={hour} type="time" />
        <input className={styles.preserveBtn} value={"submit"} type="submit" />
      </form>
    </div>
  );
};

export default PreservationModal;
