import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import SetScore from "./SetScore";
export default function ImageCards() {
  let deck = [];

  const options = {
    method: "GET",
    url: "https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/qualities/legendary",
    headers: {
      "X-RapidAPI-Key": "d52f5d6782mshf64a08aa95ff0cep12858djsn80bd6f20f96f",
      "X-RapidAPI-Host": "omgvamp-hearthstone-v1.p.rapidapi.com",
    },
  };

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["cards"],
    queryFn: () => axios.request(options).then((res) => res.data),
    refetchOnmount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    retry: false,
    staleTime: Infinity,
    cacheTime: Infinity,
  });

  if (isLoading) return "Loading...";
  if (error) return error.message;

  const randomizedData = data.sort(() => 0.5 - Math.random());
  const cleaned = randomizedData.filter((randomizedData) => randomizedData.img);
  deck = cleaned.slice(20, 40);
  console.log(deck);

  return (
    <div>
      <SetScore deck={deck} refetch={refetch} />
    </div>
  );
}
