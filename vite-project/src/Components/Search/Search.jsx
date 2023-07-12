const Search = (setSearch, setCurrentPage) => {
  return (
    <form className="">
      <input
        onChange={(e) => {
          console.log("e length", e.target.value.length);
          setSearch(e.target.value);
          setCurrentPage();
        }}
        placeholder="Search for Characters"
        type="text"
        className=""
      />
      <button className="btn btn-primary">Search</button>
    </form>
  );
};

export default Search;
