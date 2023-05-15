import { useEffect, useRef, useState, useMemo, useCallback } from "react";
import { searchMovies } from "./data/api";

export function useSearch() {
  const [inputQuery, setInputQuery] = useState("");
  const [error, setError] = useState(null);
  const isFirstInput = useRef(true);

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = inputQuery === "";
      return;
    }

    if (inputQuery === "") {
      setError("No se puede buscar pelicula vacia");
      return;
    }
    if (inputQuery.match(/^\d+$/)) {
      setError("No se puede buscar una pelicula con un numero");
      return;
    }
    if (inputQuery.length < 3) {
      setError("La búsqueda debe tener al menos 3 caracteres.");
      return;
    }

    setError(null);
  }, [inputQuery]);

  return [error, inputQuery, setInputQuery];
}

export function useMovies(search, sort) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const prevSearch = useRef(search);

  const getMovies = useCallback(async (search) => {
    if (!search) return;
    if (search === prevSearch.current) return;

    try {
      setLoading(true);
      setError(null);
      prevSearch.current = search;
      const temMovies = await searchMovies(search);
      setMovies(temMovies);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies;
  }, [movies, sort]);
  return { movies: sortedMovies, getMovies, loading };
}
