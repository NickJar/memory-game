import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";



export default function ImageCards() {

  const options = {
    method: "GET",
    url: "https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/qualities/legendary",
    headers: {
      "X-RapidAPI-Key": "d52f5d6782mshf64a08aa95ff0cep12858djsn80bd6f20f96f",
      "X-RapidAPI-Host": "omgvamp-hearthstone-v1.p.rapidapi.com",
    },
  };

  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["cards"],
    queryFn: () => axios.request(options).then((res) => res.data),
  });

  if (isLoading) return "Loading...";
  if (error) return error.message;

  console.log(data);

  return (
    <div>
      <div>
        {" "}
        <div className="flexContainer">
          {data.map( function (card, index) {
          <div key={index}><img alt="" src={card.img} /></div>
          console.log(index)
          if(index > 1345 && index < 1420){
            return  <div key={index}><img alt="" src={card.img} /></div>
          } 
        
          })}
        
          
        </div>
      </div>
    </div>
  );
}
