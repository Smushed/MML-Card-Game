import { useEffect, useState } from "react";
import axios from "axios";

const CardLibrary = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    pullAllCards();
  }, []);

  const pullAllCards = async () => {
    try {
      const { data } = await axios.get("/card/all");
      setCards(data);
    } catch (err) {
      console.log(err);
    }
  };

  return <div>Card Library</div>;
};

export default CardLibrary;
