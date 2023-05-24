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
      <div className="w-full text-white subpixel-antialiased">
        <div className="min-w-[1024px] max-w-[1600px] flex m-auto bg-background">
          <div
            className={` border-r border-lines ${showMenu ? "w-60" : "w-20"
              } min-w[80px] max-w-[240px] transition-all ease-in-out delay-300 duration-700 flex flex-col h-screen overflow-hidden flex-none`}

          >
            <LeftMenu />
          </div>

          <div className="bg-blue-300 flex flex-col grow">
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
