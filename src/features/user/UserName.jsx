import { useSelector } from "react-redux";

const UserName = () => {
  const userName = useSelector((state) => state.user.username);
  if (!userName) return null;
  return (
    <p className="hidden text-sm font-semibold uppercase md:block">
      {userName}
    </p>
  );
};

export default UserName;
