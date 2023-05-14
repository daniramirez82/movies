import { useEffect, useState, useRef } from "react";
import { getMovies, useMovies } from "../data/api";
import { useSearch } from "../helpers";
import Card from "./ui/Card";

function SearchMovies() {

  const movies = useMovies();
  const [error, inputQuery, setInputQuery] = useSearch();
  

  function handleInput(e) {
    const newQuery = e.target.value;
    if (newQuery.startsWith(' ')) return;
    setInputQuery(newQuery);
  }

  

  function handleSubmit(e) {
    e.preventDefault();
    console.log(inputQuery);
    setInputQuery("");
  }

  return (
    <div className="w-full h-full">
      <div className="w-full flex justify-between">
        <form onSubmit={handleSubmit} className="flex">
          <label>Search Movies:</label>
          <div className="flex flex-col">
            <input value={inputQuery} onChange={handleInput} className="text-sub-titles" name="query" type="text" />
            <button type="submit">Search</button>
          </div>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
      <div className="">
        <ul className="px-8 grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 bg-sub-titles">
        {movies.map((movie) => {
          return (
            <li key={movie.id}>
              <Card title={movie.title} image={movie.image} />
            </li>
          );
        })}
        </ul>
      </div>
    </div>
  );
}

export default SearchMovies;
