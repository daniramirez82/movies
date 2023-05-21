import {ReactComponent as Check} from "../../assets/icons/check.svg";

function Card({ title, image, type, user, userImg, favoriteMovie, userName, userImage }) {
  return (
    <div className="flex flex-col rounded-xl overflow-hidden relative h-[450px]">
      <div className="relative w-full h-full overflow-hidden z-0">
        <img className="object-cover w-full " src={image} alt={title} />
      </div>
      <div className="flex flex-col px-6 pt-3 z-10 bg-secondary h-1/3 min-h-[28%] justify-between">
        <div className="pb-4">
          <h3 className="font-bold leading-4 max-h-8 overflow-hidden">{title.toUpperCase()}</h3>
          <h4 className="text-sub-titles text-xs">{type}</h4>
        </div>
        <div className="flex mb-4">
          <img
            className="w-9 h-9 min-w-[36px] rounded-3xl bg-sub-titles"
            src={userImage}
            alt={userImage}
          />
          <div className="flex flex-col pl-2">
            <div className="flex items-center">
              <span className="text-sm font-bold leading-3">{userName}</span>
              <div className={`w-3 h-3 rounded-full flex justify-center items-center ml-4 ${userName.length > 9 ? "bg-green":"bg-main"} `}>
                <Check/>
              </div>
            </div>
            <span className="h-6 overflow-hidden">
              <span className="text-xs text-sub-titles opacity-70 leading-3 ">{title}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
