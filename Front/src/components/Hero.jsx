import React, { useEffect, useState } from "react";
import axios from "axios";
import endpoints from "../services/fetchSettings";
const Hero = () => {
  // fetch in DB
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    axios.get(endpoints.upcoming).then((response) => {
      console.log(response.data);
    });
  }, []);

  return <div>hero</div>;
};

export default Hero;
