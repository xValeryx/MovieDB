import { useState } from "react";
import CardList from "../../components/CardList";

import styles from "./styles.module.scss";

function CategoriesPage() {
  const [categories, setCategories] = useState([]);
  const [isActive, setActive] = useState([]);

  const changeCategory = (event) => {
    setCategories([...categories, event.target.value]);
    setActive([...isActive, event.target.value]);
  };

  return (
    <>
      <div className="Categories">
        <h2>Seleziona un Genere:</h2>
        <ul className={styles.genreBtn}>
          <li>
            <button
              className={`${styles.category_btn} ${
                isActive.toString().includes("Action") && styles.active
              }`}
              value="Action"
              onClick={changeCategory}
            >
              Action
            </button> 
          </li>
          <li>
            <button
              className={`${styles.category_btn} ${
                isActive.toString().includes("Comedy") && styles.active
              }`}
              value="Comedy"
              onClick={changeCategory}
            >
              Comedy
            </button> 
          </li>
          <li>
            <button
              className={`${styles.category_btn} ${
                isActive.toString().includes("Drama") && styles.active
              }`}
              value="Drama"
              onClick={changeCategory}
            >
              Drama
            </button>
          </li>
          <li>
            <button
              className={`${styles.category_btn} ${
                isActive.toString().includes("Thriller") && styles.active
              }`}
              value="Thriller"
              onClick={changeCategory}
            >
              Thriller
            </button>
          </li>
          <li>
            <button
              className={`${styles.category_btn} ${
                isActive.toString().includes("Sci-fi") && styles.active
              }`}
              value="Sci-fi"
              onClick={changeCategory}
            >
              Sci-fi
            </button>
          </li>
        </ul>
      </div>

      <br></br>

      <div className={styles.cards}>
        <CardList filter={categories.toString().toLowerCase()} />
      </div>
    </>
  );
}

export default CategoriesPage;
