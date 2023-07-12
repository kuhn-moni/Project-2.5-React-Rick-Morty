import React from "react";

const Pagination = (props) => {
  console.log("props", props);
  const { currentPage, setCurrentPage } = props;

  console.log("in pag", currentPage, setCurrentPage);

  const Next = () => {
    setCurrentPage(currentPage + 1);
  };

  const Prev = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div>
      <button onClick={Prev}>Prev</button>
      <button onClick={Next}>Next</button>
    </div>
  );
};

export default Pagination;
