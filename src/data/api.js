import resultMovies from "../data/results.json";


export async function getMovies(query) {

    try {
        const response = await fetch(`http://www.omdbapi.com/?apikey=ea564e4c&s=${query}`);
        const results = await response.json();
        const { Search: data } = results;
        return data?.map(r => ({
            title: r.Title,
            year: r.Year,
            id: r.imdbID,
            type: r.Type,
            image: r.Poster
        }));
    } catch (err) {
        console.log('Fail feching Data', err);
    }


}

export function useMovies() {
    const { Search: data } = resultMovies;
    return data?.map(r => ({
        title: r.Title,
        year: r.Year,
        id: r.imdbID,
        type: r.Type,
        image: r.Poster
    }));
};