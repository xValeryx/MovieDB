import { useState, useEffect } from "react";
import { GET } from "../../utils/http";

import CardItem from "../CardItem";
import styles from "./styles.module.scss";


//searchInput
function CardList({ filter, setModalVisibility, categoriesFilter}) {
  const [moviesData, setMoviesData] = useState([]);
  const [moviesDataFiltered, setMoviesDataFiltered] = useState([]);
  const [value, setValue] = useState(true);


  useEffect(() => {
    GET().then((data) => {
      setMoviesData(data);
      setMoviesDataFiltered(data);
    });
  }, [value, categoriesFilter]);
    
  
  useEffect(() => {

    const filtered = moviesDataFiltered.filter(
      (item) => {
      return item.genres.toString().toLowerCase().includes(filter.toLowerCase()) || item.title.toLowerCase().includes(filter.toLowerCase());
    });
      
    setMoviesData(filtered);
    
    // eslint-disable-next-line
  }, [filter]);
  

  return (
    <div className={styles.CardList}>
      <div className={styles.CardList__wrapper}>
      {moviesData &&
          moviesData.map((movie) => (
            <CardItem 
            cardData={movie} 
            key={movie.id}
            onForceRender={setValue} 
            value={value} 
            setModalVisibility={setModalVisibility}/>
        ))}

      </div>
    </div>
  );
}

export default CardList;