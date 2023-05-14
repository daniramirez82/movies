gitimport resultMovies from "../data/results.json";

function SearchMovies() {
  const movies = resultMovies.Search;
  function handleSubmit() {}

  return (
    <div className="w-full h-full">
      <div className="w-full flex justify-between">
        <form onSubmit={handleSubmit} className="flex">
          <label>Search Movies:</label>
          <div className="flex flex-col">
            <input type="text" />
            <button type="submit">Search</button>
          </div>
        </form>
        <p>Selector</p>
      </div>
      <div>
        <ul></ul>
        {movies.map((movie) => {
          return (
            <li key={movie.imdbID}>
              <img src={movie.Poster} />
              <h1>{movie.Title}</h1>
            </li>
          );
        })}
        //here goes the movies
      </div>
    </div>
  );
}

export default SearchMovies;
