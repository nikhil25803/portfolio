import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/");
  });
  return <div></div>;
};

export default PageNotFound;
