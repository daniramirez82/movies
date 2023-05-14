<<<<<<< HEAD
import styles from "./MainMovie.module.css";

function MainMovie() {
  return (
    <div className="relative w-full h-full">
      <div
        className={`w-full h-full bg-cover  ${styles["background-gradient"]}`}
        style={{
          backgroundImage: `url(https://statcdn.fandango.com/MPX/image/NBCU_Fandango/800/207/thumb_596DA830-7245-4748-94B1-270B8AD95360.jpg)`,
        }}
      >
      </div>
      <div
        className={`w-full h-full bg-cover absolute top-0 ${styles["background-gradient"]}`}
      ></div>
    </div>
  );
}

export default MainMovie;
=======
import styles from "./MainMovie.module.css";

function MainMovie() {
  return (
    <div className="relative w-full h-full">
      <div
        className={`w-full h-full bg-cover  ${styles["background-gradient"]}`}
        style={{
          backgroundImage: `url(https://statcdn.fandango.com/MPX/image/NBCU_Fandango/800/207/thumb_596DA830-7245-4748-94B1-270B8AD95360.jpg)`,
        }}
      >
      </div>
      <div
        className={`w-full h-full bg-cover absolute top-0 ${styles["background-gradient"]}`}
      ></div>
    </div>
  );
}

export default MainMovie;
>>>>>>> a27e6147b7756bf5d09404155e6238069c1b67bc
