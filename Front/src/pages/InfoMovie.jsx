import React from "react";
import { useParams } from "react-router-dom";

const InfoMovie = () => {
  const { id } = useParams();
  console.log(id);
  return <div>info movie</div>;
};

export default InfoMovie;
