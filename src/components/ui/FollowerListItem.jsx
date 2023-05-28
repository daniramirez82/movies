import {ReactComponent as Wifi} from "../../assets/icons/wifi.svg"

const FollowerListItem = ({ profilePic, userName, ip }) => {
  const wifi = <Wifi/>;
  const point = <div className="w-2 h-2 bg-green rounded-full"></div>
    const icon =Number(ip[ip.length -1]) >= 4 ? point : wifi;
  return (
    <li  className="w-full flex items-center justify-between pb-4 pl-3">
      <div className="flex items-center">
        <img className="w-8 rounded-full bg-lines" src={profilePic} alt="" />
        <div className="pl-4 text-sm text-sub-titles font-semibold">{userName}</div>
      </div>
      <div className="flex items-center justify-center w-4">{icon}</div>
    </li>
  );
};

export default FollowerListItem;
