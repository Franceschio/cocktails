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
      surname: surname.current.value,
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
      disactivate();
    } else if (
      !!allPreservations.find(
        (preservation) =>
          preservation.surname.toLowerCase() ===
            newPreservation.surname.toLowerCase() &&
          preservation.date === newPreservation.date
      )
    ) {
      setMsg(
        `Ci dispiace, risulta già una prenotazione a nome ${surname.current.value} per giorno ${date.current.value}!`
      );
      setPreservations((prev) => [...prev]);
    } else {
      setMsg(
        `Ci dispiace, il tavolo per giorno ${date.current.value} alle ore ${hour.current.value} risulta già prenotato!`
      );
      setPreservations((prev) => [...prev]);
    }
  };

  const disactivate = () => {
    setPreservation(() => false);
  };

  return (
    <div className={styles.PreservationModal}>
      <div onClick={disactivate} className={styles.overlay}></div>
      <form onSubmit={reserve} className={styles.preservation}>
        <h3>Prenota ora!</h3>
        <div className={styles.surname}>
          <label htmlFor="surname">Cognome</label>
          <input
            name="surname"
            ref={surname}
            type="text"
            placeholder="Cognome"
          />
        </div>

        <div className={styles.date}>
          <label htmlFor="date">Data</label>
          <input name="date" ref={date} type="date" />
        </div>

        <div className={styles.hour}>
          <label htmlFor="hour">Ora</label>
          <input name="hour" ref={hour} type="time" />
        </div>

        <input className={styles.preserveBtn} value={"invia"} type="submit" />
      </form>
    </div>
  );
};

export default PreservationModal;
