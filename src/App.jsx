import { useState } from "react";
import NavBar from "./components/NavBar";
import MainMovie from "./components/MainMovie";
import SearchMovies from "./components/SearchMovies";

function App() {
  const [showMenu, setShowMenu] = useState(false);


  function handleClick() {
    setShowMenu((prevState) => {
      return !prevState;
    });
  }

  return (
    <div className="w-full flex justify-center bg-red-500 text-white ">
      <div className="container flex  bg-background">
        <div
          className={` border-r border-lines ${
            showMenu ? "w-3" : "w-60"
          } transition-all ease-in-out delay-150 flex flex-col h-screen`}
          onClick={handleClick}
        >
          menu
        </div>

        <div className="bg-blue-300 grow flex flex-col">
          <div className="h-32 px-8 lg:px-14 bg-background flex items-center"><NavBar/></div>
          <div className="h-[40vh] bg-main"> <MainMovie/></div>
          <div className="w-full h-full"><SearchMovies/></div>

        </div>
      </div>
    </div>
  );
}

export default App;
