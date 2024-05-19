import React, { useEffect } from "react";
//useefect is the reacthook used in the project
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/Bangalore");
  }, [navigate]);
  return <div>Landing</div>;
};

export default Landing;
