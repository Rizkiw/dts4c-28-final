import React, { useEffect, useState } from "react";
import axios from "axios";

import Footer from "../components/Footer";
import Header from "../components/Header";
import News from "../components/News";

const BusinessPage = () => {
    const [data, setData] = useState();
  
    let url =
    'https://newsdata.io/api/1/news?apikey=pub_12668400e187d026d6a9f0bab21731987b270&category=business&country=id'
    
      // "https://newsapi.org/v2/top-headlines?" +
      // "country=id&category=sport&" +
      // "apiKey=e10c6e1cb638440c9fc6184d93c1d0af";
  
    useEffect(() => {
      axios
        .get(url)
        .then((response) => setData(response.data.results))
        // .then((response) => console.log(response.data.results))
        .catch((err) => console.log("show error", err));
    }, []);
  
    return (
      <div>
        <Header />
        <h1>Business News</h1>
        <News data={data} />
        <Footer />
      </div>
    );
  };

export default BusinessPage;
