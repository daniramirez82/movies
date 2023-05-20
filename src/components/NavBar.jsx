import ButtonLight from "./ui/ButtonLight";
import {ReactComponent as LeftArrow} from "../../public/icons/left-arrow.svg"
import {ReactComponent as Bell} from "../../public/icons/bell.svg"
import { useContext } from "react";
import { OpenMenuContext } from "../App";

function NavBar() {
const {showMenu, setShowMenu}= useContext(OpenMenuContext)

  return (
    <div className="flex justify-between w-full">
      <div onClick={()=> setShowMenu((prevState)=> !prevState)} className={`transition-all ease-in-out delay-300 duration-500 ${!showMenu ? "rotate-180" : ""}`} >
        <ButtonLight><LeftArrow/></ButtonLight>
      </div>
      <div className="flex justify-around items-center">
        <div className="mr-8 relative">
            <div className="w-2 h-2 bg-main absolute right-1 rounded-lg"></div>
            <Bell/></div>
        <div><img src="images/profile.png"></img></div>
      </div>
    </div>
  );
}

export default NavBar;
