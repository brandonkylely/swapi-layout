import Card from "../components/Card";
import { useState, useEffect } from "react";
import axios from "axios";
import { swapiURL } from "../api";
import { feedAtom } from "../state";
import { useAtom } from "jotai";
import Header from "../components/Header";

export default function HomePage() {
  const [starshipArray, setStarshipArray] = useState([]);
  const [feed, setFeed] = useAtom(feedAtom);

  const fetchStarshipData = async () => {
    const response = await axios.get(`${swapiURL}/starships`);
    // console.log(response.data.results);
    setStarshipArray(response.data.results)
    // setFeed(response.data.results);
    // console.log(feed);
  };

  useEffect(() => {
    fetchStarshipData();
  }, []);

  return (
    <>
      <Header />
      {feed &&           
      <Card
            name={feed.name}
            src={"starship.jpg"}
            manufacturer={feed.manufacturer}
            cost_in_credits={feed.cost_in_credits}
          />}
      {starshipArray &&
        starshipArray.map((item, index) => (
          <Card
            key={index}
            name={item.name}
            src={"starship.jpg"}
            manufacturer={item.manufacturer}
            cost_in_credits={item.cost_in_credits}
          />
        ))}
    </>
  );
}
