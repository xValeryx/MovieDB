import {useState, useEffect} from "react";
import CardList from "../../components/CardList";
//import Alert from "../../components/Alert";
import Modal from  "../../components/Modal";



import styles from "./styles.module.scss";

function Home() {

  const [searchValue, setSearchValue] = useState("");

  //const [searchInput, setSearchInput] = useState("");

  //const [isModalVisible, setModalVisibility] = useState(false);
  const [isModalVisibile, setModalVisibility] = useState(false);
  
  useEffect(() => {
    setTimeout(() => {
      setModalVisibility(false);
    }, 6000);
  }, [isModalVisibile]); //isModalVisible //isModalVisibile
  

  const changing = (event) => {
    setSearchValue(event.target.value);
  };

  const closeFunction = () => {
   setModalVisibility(false);
  }


  return (
    <>
    <div className={styles.header}> 
     <h1>Milioni di film, serie TV da scoprire. Esplora ora.</h1>
      <label htmlFor="search"></label>
      <input className={styles.searchBar}
      type="text" 
      placeholder="Cerca un film o una serie tv..."
      id="search" 
      name="search" 
      value={searchValue} //searchInput
      onChange={changing}  //(e) => setSearchInput(e.target.value)
      />
    </div>

    <div className={styles.CardList_wrapper}> 
      <CardList filter={searchValue} setModalVisibility={setModalVisibility} /> 
      <Modal //Alert //Modal
      text="Il film è stato Eliminato!"
      isVisibile={isModalVisibile} //Visibile
      closeFunction={closeFunction}
      color="blue"
      />
      </div>
   </>

    
  );
}

export default Home;

//searchInput={searchInput}/> al posto di filter={searchValue} 