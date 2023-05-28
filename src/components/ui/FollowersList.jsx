import FollowerListItem from "./FollowerListItem";

const FollowerList = ({ followers }) => {
  return (
    <div className="border-t-[1px] border-lines">
      <div className="py-8  text-sm text-sub-titles font-bold">Following</div>
      <ul className="flex flex-col ">
        {followers?.map((follower) => {
          return (
            <FollowerListItem
              userName={follower.username}
              profilePic={follower.image}
              ip={follower.ip}
              key={follower.username}
            />
          );
        })}
      </ul>
     
    </div>
  );
};

export default FollowerList;
