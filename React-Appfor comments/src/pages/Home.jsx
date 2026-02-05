import { useEffect, useState } from "react";
import axios from "axios";
import Comments from "../components/Comments";

const Home = () => {
  return (
    <div className="relative z-10">
      <Comments />
    </div>
  );
};

export default Home;
