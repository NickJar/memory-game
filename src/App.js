import "./App.css";
import Header from "./components/header";
import ImageCards from "./components/imageCards";
import { useState } from "react";
import axios, { AxiosHeaders } from "axios";
import { useQuery } from "@tanstack/react-query";

function App() {
  const [selectedCards, setSelectedCards] = useState([]);
  
  return (
    <div className="App">
      <Header />
     
      <div className="flexContainer">
      <ImageCards />
      </div>
    </div>
  );
}

export default App;
