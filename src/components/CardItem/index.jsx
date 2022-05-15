import { Link } from "react-router-dom";
import { DELETE } from "../../utils/http";

import styles from "./styles.module.scss";


function CardItem({ 
  cardData, 
  onForceRender, 
  value, 
  setModalVisibility, 
  changeClass 
}) {
  
  const onCardDelete = () => {
    DELETE(cardData.id).then((data) => onForceRender(!value)); // ("/")
    setModalVisibility(true);
  };

  
  // prova alert elimina film

  /*
  
  const deleteAction = () => {
    setModal({
      show: "visible",
      title: "Sicuro di volere eliminare?",
      description: "",
      needConfirm: true,
      cardData: cardData,
    });
  };

  */

  return (
    <div className={styles.CardItem}> 
     
      <img src={cardData.poster} alt={cardData.title} /> <button onClick={onCardDelete} className={styles.deleteBtn}>
        ❌
      </button>
      <Link to={`/edit-movie/${cardData.id}`}>
        <h2>{cardData.title}</h2>
      </Link>
      <p className={styles.year}>{cardData.year}</p>
      <p className={styles.description}>{cardData.description}</p>
      <div className={styles.genres}>
        <ul>
          {cardData.genres &&
            cardData.genres.map((genre, i) => <li key={i}>{genre}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default CardItem;