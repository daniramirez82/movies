export async function searchMovies(search) {
  let mappedMovies = null;
  if (search) {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=ea564e4c&s=${search}`
      );
      const results = await response.json();
      if (results.Response) {
        const { Search: data } = results;
        mappedMovies = data?.map((r) => ({
          title: r.Title,
          year: r.Year,
          id: r.imdbID,
          type: r.Type,
          image: r.Poster,
        }));
      }
    } catch (err) {
      console.log("Fail feching Data", err);
    }
  }
  return mappedMovies;
}
