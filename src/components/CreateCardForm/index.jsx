import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { POST, PUT } from "../../utils/http";
import styles from "./styles.module.scss";

function CreateCardForm({ setModalVisibility, callType, cardData }) {

  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [poster, setPoster] = useState("");
  const [genres, setGenres] = useState("");
  const [description, setDescription] = useState("");


  useEffect(() => {
    if (cardData) {
      setTitle(cardData.title);
      setYear(cardData.year);
      setPoster(cardData.poster);
      setGenres(cardData.genres);
      setDescription(cardData.description);
    }
// eslint-disable-next-line
  }, [cardData]);


  const location = useLocation();
  const movieId = location.pathname.split("/").reverse()[0];

  const unStringifyGenres = (genres) => genres.split(",");

  const addNewMovie = (e) => {
    e.preventDefault();

    if (callType === "POST") {
      POST({
        title,
        year,
        poster,
        genres: unStringifyGenres(genres),
        description,
      });

    } else {
      PUT(movieId, {
        title,
        year,
        poster,
        genres: unStringifyGenres(genres),
        description,
      });
    }
   
    setModalVisibility(true);
    setTitle("");
    setYear("");
    setPoster("");
    setGenres("");
    setDescription("");

    
  };

  

  return (
    <div className={styles.CreateCardForm}>
      <form onSubmit={addNewMovie} className="CreateCardForm__form">
      
        <label htmlFor="title">Title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          id="title"
          name="title"
          placeholder="title..."
          required
        />

        <label htmlFor="year">Year</label>
        <input
          value={year}
          onChange={(e) => setYear(e.target.value)}
          type="number"
          id="year"
          name="year"
          min="1930"
          max="2030"
          placeholder="es. 2022..."
          required
        />

        <label htmlFor="poster">Poster</label>
        <input
          value={poster}
          onChange={(e) => setPoster(e.target.value)}
          type="text"
          id="poster"
          name="poster"
          placeholder="poster..."
          required
        />

        <label htmlFor="genres">Genre</label>
        <input
          value={genres}
          onChange={(e) => setGenres(e.target.value)}
          type="text"
          id="genres"
          name="genres"
          placeholder="es. drama, comedy, crime..."
          required
        />

        <label htmlFor="description">Description</label>
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          id="description"
          name="description"
          placeholder=" description..."
          required
        />

        <input type="submit" value="Send" className={styles.submitBtn} />
      </form>
    </div>
  );
}

export default CreateCardForm;