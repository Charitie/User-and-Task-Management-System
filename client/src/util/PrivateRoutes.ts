import { useNavigate, Outlet } from "react-router-dom";

function Private({ children }: { children: React.ReactElement }) {
  const token = localStorage.getItem("todotoken");
  console.log(token);
  const navigate = useNavigate();
  if (!token) return navigate("/");

  return children;
}
export default Private;

