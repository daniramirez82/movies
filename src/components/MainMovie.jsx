import styles from "./MainMovie.module.css";
import ButtonSmall from "./ui/ButtonSmall";
import { ReactComponent as Wifi } from "../assets/icons/wifi.svg";
import ButtonBig from "./ui/ButtonBig";
import { mainMovies } from "../data/main-movies";
import { randomIntFromInterval } from "../helpers";
import { useRef } from "react";

function MainMovie() {


  const movie = useRef(mainMovies[randomIntFromInterval(1,10)]);

  return (
    <div className="relative w-full h-full text-white">
      <div className="relative z-10 w-full flex justify-between px-12 pt-6 h-full">
        <div className="flex flex-col justify-between h-full">
          <div>
            <div>
              <ButtonSmall label="Live">
                <Wifi />
              </ButtonSmall>
            </div>
            <div className="pt-10 text-5xl font-bold pb-3">
              {movie.current.platform.toLocaleUpperCase()}
            </div>
            <h1 className="pb-3 text-3xl font-medium drop-shadow-xl">{movie.current.title}</h1>
            <div className="flex justify-between w-fit">
              <div className="flex">
                <img
                  className="w-7 mr-2"
                  src="/icons/IMDB-logo.svg"
                  alt="IMDB logo"
                />
                <span>{movie.current.points}</span>
              </div>
              <div className="flex">
                <img
                  className="w-7 mr-2 ml-2"
                  src={`/icons/${movie.current.language}.svg`}
                  alt=""
                />
                <span>{movie.current.language}</span>
              </div>
            </div>
          </div>
          <div className="pb-6">
            <ButtonBig label="Watch" />
          </div>
        </div>
        <div>carrusel</div>
      </div>
      <div
       style={{
        backgroundImage:`url(${movie.current.bgImage})`
      }}
        className={`w-full h-full bg-cover  ${styles["background-gradient"]} absolute left-0 top-0`}
       
      ></div>
      <div
        className={`w-full h-full bg-cover absolute top-0 left-0 ${styles["background-gradient"]}`}
      ></div>
    </div>
  );
}

export default MainMovie;
