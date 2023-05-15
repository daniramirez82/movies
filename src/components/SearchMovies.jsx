import { useEffect, useState, useRef, useCallback } from "react";
import { useMovies, useSearch } from "../helpers";
import Card from "./ui/Card";
import debounce from "just-debounce-it";

function SearchMovies() {
  const [sort, setSort] = useState(false);
  const [error, inputSearch, setInputQuery] = useSearch();
  const { movies, getMovies, loading } = useMovies(inputSearch, sort);

  const debouncedGetMovies = useCallback( debounce(search =>{
    return getMovies(search);
  }, 2000), [getMovies]);

  function handleSort (){
    setSort(!sort);
  }

  function handleInput(e) {
    const newQuery = e.target.value;
    if (newQuery.startsWith(" ")) return;
    setInputQuery(newQuery);

    debouncedGetMovies(newQuery)
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (error === null) {
      getMovies(inputSearch);
      setInputQuery("");
    }
  }

  return (
    <div className="w-full h-full">
      <div className="w-full flex justify-between">
        <form onSubmit={handleSubmit} className="flex">
          <label>Search Movies:</label>
          <div className="flex flex-col">
            <input
              value={inputSearch}
              onChange={handleInput}
              className="text-sub-titles"
              name="query"
              type="text"
            />
            <input type="checkbox" value={sort} onChange={handleSort}/>
            <button type="submit">Search</button>
          </div>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
      <div className="">
        <ul className="px-8 grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 bg-sub-titles">
          {loading
            ? "Loading ... "
            : movies?.map((movie) => {
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
