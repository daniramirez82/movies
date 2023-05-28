import { menuData } from "../data/menu";
import Button from "./ui/Button";
import Icon from "./ui/Icon";
import { useContext } from "react";
import { OpenMenuContext } from "../App";
import FollowerList from "./ui/followersList";
import { users } from "../data/users";

function LeftMenu() {
  const { showMenu } = useContext(OpenMenuContext);

  return (
    <>
      <div className="p-4 pt-0">
        <div className="h-32 flex items-center pl-3">
          <img className="w-8" src="logo.svg" alt="moovies Logo" />
          <span
            className={` ${
              showMenu ? "opacity-100" : "opacity-0"
            } font-bold pl-5 transition-all delay-500 duration-200`}
          >
            M<span className="text-main">oo</span>vies
          </span>
        </div>
        <h4
          className={`${
            showMenu ? "opacity-100" : "opacity-0"
          } transition-all delay-500 duration-200 w-24 text-sm text-sub-titles font-bold`}
        >
          News Feed
        </h4>
        <div>
          {menuData.map((item) => {
            return (
              <Button showMenu={showMenu} label={item.label} key={item.label}>
                <Icon name={item.icon} size={24} color="#111" />
              </Button>
            );
          })}
        </div>
      </div>
      <div className="p-4">
        <FollowerList followers={users}/>
      </div>
    </>
  );
}

export default LeftMenu;
