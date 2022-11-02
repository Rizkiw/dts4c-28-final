import React, { useEffect, useState } from "react";
import axios from "axios";

import Header from "../components/Header";
import Footer from "../components/Footer";
import News from "../components/News";

const HomePage = () => {
  const [data, setData] = useState();

  let url = 
   'https://api.newscatcherapi.com/v2/sources?topic=business&lang=en&countries=US';
    // 'https://jakpost.vercel.app/api/category/most-viewed';
    // "https://newsapi.org/v2/everything?" +
    // "q=world&language=id&" +
    // "apiKey=e10c6e1cb638440c9fc6184d93c1d0af";

  // let options = {
  //     method: 'GET',
  //     url: 'https://api.newscatcherapi.com/v2/search',
  //     // url: 'https://api.newscatcherapi.com/v2/sources?topic=business&lang=en&countries=US',
  //     params: {q: 'all', lang: 'id', sort_by: 'relevancy', page: '1'},
  //     headers: {
  //       'x-api-key': '5KbF7vX9w0jUAD92YSuF6EKFHkH9UO8DpFhEUG-3ZXg'
  //       // 'x-api-key': process.env.REACT_APP_API_KEY
  //     }
  // };

  const options = {
    method: 'GET',
    url: 'https://bing-news-search1.p.rapidapi.com/news',
    params: {safeSearch: 'Off', textFormat: 'Raw'},
    headers: {
      'X-BingApis-SDK': 'true',
      'X-RapidAPI-Key': 'ed5f0cdd14msh6f99f1762b26fabp1b6bc7jsn2939eac7ff0f',
      'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
    }
  };

  useEffect(() => {
    axios
      .request(options)
      .then((response) => {setData(response.data.value)})
        // response.header("Access-Control-Allow-Origin", "*");})
      // .then((response) => console.log(response.data.posts));
      .catch((err) => console.log("show error", err));
  }, []);

  console.log("data", data);

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
