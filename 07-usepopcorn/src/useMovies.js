import { useState, useEffect } from "react";

const KEY = "46d24e6f";

// this is a Custom Hook
// Custom Hooks in React are reusable functions that start with use and encapsulate stateful
// logic or side effects, allowing developers to share functionality across components.
export function useMovies(query, callback) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // for loading UI implementation
  const [error, setError] = useState("");

  useEffect(
    function () {
      callback?.(); // this will call the function only if it exist

      const controller = new AbortController(); // this is a browser API, not react itself

      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError("");

          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            { signal: controller.signal }, // this is how the controller for aborting fetching data is set
          );

          if (!res.ok)
            throw new Error("Something went wrong with fetching the movies");

          const data = await res.json();
          if (data.Response === "False") throw new Error("Movie not found");

          setMovies(data.Search);
          // console.log(data);
          setError("");
        } catch (err) {
          // console.error(err.message);

          if (err.name !== "AbortError") {
            // this prevents from interpreting abort error as a real error in the app
            setError(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }

      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }

      // handleCloseMovie();
      fetchMovies();

      return function () {
        controller.abort(); // this is how the fetch is aborted each time that the component is rerendered
      };
    },
    [query], // this is kind of an error hehe
  );

  return { movies, isLoading, error };
}
