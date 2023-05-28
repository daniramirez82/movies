import ButtonCircle from "./ButtonCircle";
import { useContext } from "react";
import { FollowerListContext } from "../../App";
import {ReactComponent as LeftArrow} from "../../assets/icons/left-arrow.svg"

const ButtonLoadMore = () => {
  const { showMoreFollowers, setShowMoreFollowers } =
    useContext(FollowerListContext);

    const handleClick = (e)=>{
        e.stopPropagation();
        setShowMoreFollowers(!showMoreFollowers);
    }
  return (
    <div
      onClick={handleClick}
      className="w-full flex justify-start items-center bg-background pl-4"
    >
      <ButtonCircle direction={showMoreFollowers}><LeftArrow/></ButtonCircle>
      <span className="pl-4 text-sm text-sub-titles font-bold">{showMoreFollowers ? "Show less" : "Load more"}</span>
    </div>
  );
};

export default ButtonLoadMore;
