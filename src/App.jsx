import { createContext, useState } from "react";
import NavBar from "./components/NavBar";
import MainMovie from "./components/MainMovie";
import SearchMovies from "./components/SearchMovies";
import LeftMenu from "./components/LeftMenu";
import ButtonLoadMore from "./components/ui/ButtonLoadMore";

export const OpenMenuContext = createContext(null);
export const FollowerListContext = createContext(null);

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showMoreFollowers, setShowMoreFollowers] = useState(false);

  return (
    <OpenMenuContext.Provider value={{ showMenu, setShowMenu }}>
      <div className="w-full text-white subpixel-antialiased">
        <div className="min-w-[1024px] max-w-[1600px] flex m-auto bg-background">
          <FollowerListContext.Provider
            value={{ showMoreFollowers, setShowMoreFollowers }}
          >
            <div
              onClick={() => {
                setShowMenu(!showMenu);
              }}
              className={` border-r border-lines ${
                showMenu ? "w-60" : "w-20"
              } ${
                !showMoreFollowers ? " h-screen" : "h-auto"
              } min-w[80px] max-w-[240px] transition-all ease-in-out delay-300 duration-700 flex flex-col overflow-hidden flex-none relative pb-10`}
            >
              
                <LeftMenu />
            
              <div className="absolute left-3 bottom-0 w-full py-4 bg-background">
                <ButtonLoadMore />
              </div>
            </div>
          </FollowerListContext.Provider>

          <div className="bg-blue-300 flex flex-col grow">
            <div className="h-32 min-h-[128px] px-8 lg:px-14 bg-background flex items-center">
              <NavBar />
            </div>
            <div className="max-h-[40vh] min-h-[320px] ">
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
