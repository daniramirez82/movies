import styles from "./MainMovie.module.css";
import ButtonSmall from "./ui/ButtonSmall";
import { ReactComponent as Wifi } from "../assets/icons/wifi.svg";
import ButtonBig from "./ui/ButtonBig";
import { mainMovies } from "../data/main-movies";

function MainMovie({ platform, points, title, language }) {
  const movie = mainMovies[0];

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
              {movie.platform.toLocaleUpperCase()}
            </div>
            <div className="pb-3 text-3xl font-medium">{movie.title}</div>
            <div className="flex justify-between w-fit">
              <div className="flex">
                <img
                  className="w-7 mr-2"
                  src="/icons/IMDB-logo.svg"
                  alt="IMDB logo"
                />
                <span>{movie.points}</span>
              </div>
              <div className="flex">
                <img
                  className="w-7 mr-2 ml-2"
                  src={`/icons/${movie.language}.svg`}
                  alt=""
                />
                <span>{movie.language}</span>
              </div>
            </div>
          </div>
          <div className=" pb-1 xl:pb-8">
            <ButtonBig label="Watch" />
          </div>
        </div>
        <div>carrusel</div>
      </div>
      <div
        className={`w-full h-full bg-cover  ${styles["background-gradient"]} absolute left-0 top-0`}
        style={{
          backgroundImage: `url(https://statcdn.fandango.com/MPX/image/NBCU_Fandango/800/207/thumb_596DA830-7245-4748-94B1-270B8AD95360.jpg)`,
        }}
      ></div>
      <div
        className={`w-full h-full bg-cover absolute top-0 left-0 ${styles["background-gradient"]}`}
      ></div>
    </div>
  );
}

export default MainMovie;
