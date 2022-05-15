
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { GET} from "../../utils/http";
//import { FaPen, FaTrash } from "react-icons/fa";
//import { Button } from "./../../components/Button";

import Alert from "../../components/Alert";
import CardItem from "../../components/CardItem";
import CreateCardForm from "../../components/CreateCardForm";

import styles from "./styles.module.scss";



function EditMovie() {

  const location = useLocation();
  const [movieData, setMovieData] = useState({});
  const movieId = location.pathname.split("/").reverse()[0];

  const [isModalVisible, setModalVisibility] = useState(false);

 useEffect(() => {
   setTimeout(()  => {
     setModalVisibility(false);
   }, 6000);
 }, [isModalVisible]);
  
  
  useEffect(() => {
    GET(movieId).then((data) => setMovieData(data));
    // eslint-disable-next-line
  }, [isModalVisible]);

  const closeFunction = () => {
    setModalVisibility(false);
  }


  return (
    
    <div className={styles.EditMovie}>
     <CardItem cardData={movieData} changeClass="editMovie" />
     <CreateCardForm setModalVisibility={setModalVisibility} callType="PUT" h2Title="Edit movie" cardData={movieData} />
     <Alert 
       text="Il film è stato Modificato!"
       isVisible={isModalVisible}
       closeFunction={closeFunction}
       color="red"
       />
    </div>
  );
};

export default EditMovie;

