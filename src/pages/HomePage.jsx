import Card from "../components/Card";
import { useState, useEffect } from "react";
import axios from "axios";
import { swapiURL } from "../api";

export default function HomePage() {
  const [starshipArray, setStarshipArray] = useState([])
  const fetchStarshipData = async () => {
    const response =await axios.get(`${swapiURL}/starships`)
    console.log(response.data.results)
    setStarshipArray(response.data.results)
  }

  useEffect(() => {
    fetchStarshipData()
  }, [])

  return <>
    {starshipArray && starshipArray.map((item, index) => (
      <Card key={index} name={item.name} src={"starship.jpg"} manufacturer={item.manufacturer} cost_in_credits={item.cost_in_credits} />
    )) 


    }
    <Card />
  </>
}