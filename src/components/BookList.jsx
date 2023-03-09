import React, { useEffect, useState } from "react";
import Listofbooks from "./listofbooks.json";
import "./BookList.css";

function BookList() {
  
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  data.sort(function (a, b) {
    if (a.author.toLowerCase() > b.author.toLowerCase()) return 1;
    if (a.author.toLowerCase() < b.author.toLowerCase()) return -1;
    return 0;
  });

  useEffect(() => {
    setData(Listofbooks);
  }, [Listofbooks]);

  const handleChange = (event) => {
    setSearch(event.target.value);
    
  };

  
  const handleClick = () => {
    let filtered = data.filter((item) => {
      if (search.toLowerCase() === "") {
        item();
      } else {
        return item.author.toLowerCase().includes(search);
      }
    });
    setData(filtered);
  };

  return (
    <div className="page">
      <input
        type="text"
        placeholder="Search.."
        className="search"
        onChange={(event) => handleChange(event)}
        value={search}
        
      />
      
      <button className="button" onClick={handleClick}>Search</button>

      {data.map((item) => (
        <div className="page-container">
          <div key={item.author} className="container">
            <h1>Author : {item.author}</h1>
            <h2>Title: {item.title}</h2>
            <h3>Genre: {item.genre}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BookList;
