import { randomIntFromInterval } from "../helpers";
import { users } from "./users";

export async function searchMovies(search) {
  let mappedMovies = null;
  if (search) {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=ea564e4c&s=${search}`
      );
      const results = await response.json();
      const tempUsers = getUsers();
      if (results.Response) {
        const { Search: data } = results;
        mappedMovies = data?.map((r,i) => ({
          userName: tempUsers[i].username,  
          userImage: tempUsers[i].image,
          title: r.Title,
          year: r.Year,
          id: r.imdbID,
          image: r.Poster,
          type:r.Type[0].toUpperCase()+r.Type.slice(2-1),
        }));
      }
    } catch (err) {
      console.log("Fail feching Data", err);
    }
  }
  return mappedMovies;
}

const getUsers = ()=>{
    const TOTAL_USERS = 10;
    const tempUsers = [];
    for (let index = 0; index < TOTAL_USERS; index++) {
        tempUsers.push(users[randomIntFromInterval(1,30)]) 
    }
    return tempUsers;
}


