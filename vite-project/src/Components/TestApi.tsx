import React, { useEffect, useState } from "react";

function TestApi() {
  const [countries, setCountries] = useState<any>([]);
  const urlsArray = [
    "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/gm.json",
    "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/sp.json",
    "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/fr.json",
  ];

  //   const allResults =  Promise.all(
  //     arrayReponse.map(async (response) => {
  //       const result = await (await response).json();
  //       console.log("result :>> ", result);

  //       return result;
  //     })
  //   );

  //   const fetchData = async (url: string) => {
  //     const response = await fetch(url);
  //     const result = await response.json();
  //     console.log("result :>> ", result);
  //   };

  useEffect(() => {
    //   fetchData();

    const arrayReponse = urlsArray.map(async (url) => {
      const response = await fetch(url);
      const result = await response.json();
      return result;
    });
    const allResults = Promise.all(arrayReponse).then((results) => {
      console.log("results :>> ", results);
      setCountries(results);
      return results;
      // return results.map((result) => {
      //   return result.json();
      // });
    });
  }, []);

  return (
    <div>
      <h1>Countries</h1>
      {countries &&
        countries.map((result) => {
          console.log("result...JSX :>> ", result);
          return <p>r{result?.Introduction?.Background?.text}</p>;
        })}
    </div>
  );
}

export default TestApi;
