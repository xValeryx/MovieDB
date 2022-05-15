import { useState, useEffect } from "react";
import CreateCardForm from "./../../components/CreateCardForm";
import Modal from "./../../components/Modal";
import styles from "./styles.module.scss";

function AddMovie() {
  const [isModalVisibile, setModalVisibility] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setModalVisibility(false);
    }, 3000);
  }, [isModalVisibile]);

  return (
    <div className={styles.AddMovie}>
      <h1>Add a New Movie</h1>
      <CreateCardForm setModalVisibility={setModalVisibility} callType="POST" />
      <Modal
        text="Un nuovo film è stato aggiunto alla lista!"
        isVisibile={isModalVisibile}
      />
    </div>
  );
}

export default AddMovie;