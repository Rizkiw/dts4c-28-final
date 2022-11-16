import React, { useEffect, useState } from 'react';
import axios from "axios";


import Footer from '../components/Footer';
import Header from '../components/Header';
import News from '../components/News';

const EntertaimentPage = () => {
    
  const [data, setData] = useState();
    let url =  
    'https://newsdata.io/api/1/news?apikey=pub_12668d62fb0893fe65b71e94a1b791fefd91d&country=id&language=in&category=entertainment'
    // "https://newsapi.org/v2/top-headlines?" +
    // "country=id&"+
    // "apiKey=e10c6e1cb638440c9fc6184d93c1d0af";

    useEffect(() => {
        axios
          .get(url)
          .then((response) => setData(response.data.results))
        //   .then((response) => console.log(response.data.results))
          .catch((err) => console.log("show error", err));
      }, []);

      // console.log("data", data);

    return (
        <div>
            <Header />
            <h1>Entertainment News</h1>
            <News data={data} />
            <Footer />
        </div>
    );
}

export default EntertaimentPage;
