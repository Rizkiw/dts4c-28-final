import React, { useEffect, useState } from "react";
import axios from "axios";

import Footer from "../components/Footer";
import Header from "../components/Header";
import News from "../components/News";

const SciencePage = () => {
  const [data, setData] = useState();

  let url =
    "https://newsapi.org/v2/top-headlines?" +
    "country=id&category=science&" +
    "apiKey=e10c6e1cb638440c9fc6184d93c1d0af";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => setData(response.data.articles))
      // .then((response) => console.log(response.data.results))
      .catch((err) => console.log("show error", err));
  }, []);

  return (
    <div>
      <Header />
      <h1>Science News</h1>
      <News data={data} />
      <Footer />
    </div>
  );
};

export default SciencePage;