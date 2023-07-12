import { useEffect, useState } from "react";
import Card from "./Components/Card/Card";
import Pagination from "./Components/Pagination/Pagination";
import Search from "./Components/Search/Search";
// import "../App.css";

function App() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    console.log("our page number changed", currentPage);
    fetchCharacters(currentPage, search);
  }, [currentPage, search]);

  const fetchCharacters = async (pageNumber, search) => {
    try {
      let result = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${search}&page=${pageNumber}`
      );
      let json = await result.json();
      console.log("json.results.length :>> ", json.results.length);
      console.log(json);
      setData(json.results);
    } catch (error) {
      console.log("need better error handling", error.message);
    }
  };

  return (
    <>
      <Search setSearch={setSearch} setCurrentPage={setCurrentPage} />
      {data.length > 0 &&
        data.map((character, i) => <Card key={i} character={character} />)}
      <Pagination setCurrentPage={setCurrentPage} currentPage={currentPage} />
    </>
  );
}

export default App;
