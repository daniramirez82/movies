// eslint-disable-next-line no-unused-vars
import { useEffect, useState, useRef, useCallback } from "react";
import { useMovies, useSearch } from "../helpers";
import Card from "./ui/Card";
import debounce from "just-debounce-it";
import { ReactComponent as Search } from "../../public/icons/search.svg"


function SearchMovies() {
  const [sort, setSort] = useState(false);
  const [error, inputSearch, setInputQuery] = useSearch();
  const { movies, getMovies, loading } = useMovies(inputSearch, sort);

  const debouncedGetMovies = useCallback(debounce(search => {
    return getMovies(search);
  }, 300), [getMovies]);

  function handleSort() {
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
    <div className="w-full h-full ">
      <div className="w-full h-40 flex justify-between items-center ">

        <h3 className=" w-80">Continue Watching</h3>

        <form onSubmit={handleSubmit} className="w-full">
          <div className="flex  justify-between items-center">
            <div className="flex flex-col pt-6">
              <div className="relative">
                <div className="absolute left-4 pt-[2px] translate-y-1/2 "><Search /></div>
                <input
                  placeholder="Search a movie"
                  value={inputSearch}
                  onChange={handleInput}
                  className="text-sub-titles h-14 bg-background rounded-2xl pl-14 border border-lines"
                  name="query"
                  type="text"
                />
              </div>
              <p className={`${error ? "opacity-100" : "opacity-0"} text-main h-6 w-72`}>{error}</p>
            </div>
            <div className="flex">
            <p className="pr-4">Sort By Name: </p>
            <input type="checkbox" value={sort} onChange={handleSort} />

            </div>
            
          </div>
        </form>



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
