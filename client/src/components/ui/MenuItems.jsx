import { useNavigate } from "react-router-dom";

const MenuItems = ({
  icon: Icon,
  notificationIcon: NotificationIcon,
  title,
  path,
  notification,
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(path);
  };

  return (
    <div
      onClick={handleClick}
      className="flex items-center justify-between gap-4 px-4 py-2 rounded-md transition-all ease-in-out duration-200 bg-green-100 hover:bg-gray-100"
    >
      <div className="flex items-center gap-3 ">
        <Icon />
        <p className="text-gray-700 font-medium text-md ">{title}</p>
      </div>
      <div className="flex items-center justify-center px-2 py-1 cursor-pointer rounded-lg bg-orange-300">
        <NotificationIcon style={{ fontSize: "16px", color: "gray" }} />
        <p className=" text-gray-700 font-semibold text-sm ">{notification}</p>
      </div>
    </div>
  );
};

export default MenuItems;
