import "./App.css";
import Header from "./components/header";
import ImageCards from "./components/imageCards";


function App() {
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
