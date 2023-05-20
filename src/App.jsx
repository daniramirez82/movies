import { createContext, useState } from "react";
import NavBar from "./components/NavBar";
import MainMovie from "./components/MainMovie";
import SearchMovies from "./components/SearchMovies";
import LeftMenu from "./components/LeftMenu";

export const OpenMenuContext = createContext(null);

function App() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <OpenMenuContext.Provider value={{ showMenu, setShowMenu }}>
      <div className="w-full flex justify-center bg-red-500 text-white ">
        <div className="container flex  bg-background">
          <div
            className={` border-r border-lines ${showMenu ? "w-60" : "w-20"
              } transition-all ease-in-out delay-300 duration-700 flex flex-col h-screen overflow-hidden`}

          >
            <LeftMenu />
          </div>

          <div className="bg-blue-300 grow flex flex-col">
            <div className="h-32 min-h-[128px] px-8 lg:px-14 bg-background flex items-center">
              <NavBar />
            </div>
            <div className="min-h-[40vh] bg-main">
              <MainMovie />
            </div>
            <div className="w-full h-full">
              <SearchMovies />
            </div>
          </div>
        </div>
      </div>
    </OpenMenuContext.Provider>
  );
}

export default App;
