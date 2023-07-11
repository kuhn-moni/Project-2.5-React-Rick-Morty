import { useEffect, useState } from "react";
import Card from "./Components/Card/Card";
// import "../App.css";

function App() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchCharacters();
  }, []); // Empty array makes this run only on component mount

  const fetchCharacters = async () => {
    try {
      let result = await fetch("https://rickandmortyapi.com/api/character");
      let json = await result.json();
      console.log("json.results.length :>> ", json.results.length);
      setData(json.results);
    } catch (error) {
      console.log("need better error handling", error.message);
    }
  };

  console.log("first render undefined", data);
  return (
    <>
      {data.length > 0 &&
        data.map((character, i) => <Card key={i} character={character} />)}
      <button>prev</button>
      <button>next</button>
    </>
  );
}

export default App;
