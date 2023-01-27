import { useEffect, useState } from "react";
import axios from "axios";
import CardBase from "../../models/CardBase";

const CardLibrary = () => {
  const [cards, setCards] = useState<CardBase[]>([]);

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

  return (
    <>
      {cards.map((card) => (
        <div key={card._id}>
          <h1>{card.name}</h1>
          <p>{card.description}</p>
        </div>
      ))}
    </>
  );
};

export default CardLibrary;
