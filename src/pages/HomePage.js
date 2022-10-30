import React, { useEffect, useState } from "react";
import axios from "axios";

import Header from "../components/Header";
import Footer from "../components/Footer";
import News from "../components/News";

const HomePage = () => {
  const [data, setData] = useState();

  let url = 'https://jakpost.vercel.app/api/category/most-viewed';
    // "https://newsapi.org/v2/everything?" +
    // "q=world&language=id&" +
    // "apiKey=e10c6e1cb638440c9fc6184d93c1d0af";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => setData(response.data.posts))
      // .then((response) => console.log(response.data.posts))
      .catch((err) => console.log("show error", err));
  }, []);

  // console.log("data", data);

  return (
    <div>
      <Header />
      <h1>Today News</h1>
      <News data={data} />
      <Footer />
    </div>
  );
};

export default HomePage;
