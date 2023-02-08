import React from "react";
import moment from "moment";
import DetailNewsPage from "../pages/DetailNewsPage"; 

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Divider } from "@mui/material";
import logoImg from "../assets/alt_image.png";
import { Link } from "react-router-dom";

// const { JSDOM } = require('jsdom');

function NewsArticles(data) {
  const showArticle = data.data;

  const openInNewTab = (url) => {
      window.open(url, "_blank", "noopener,noreferrer");
    };
  
  const getTime = showArticle.pubDate;
  const srcImg = showArticle.image_url ? showArticle.image_url : logoImg;
  
  
  // console.log("news article", showArticle);
  return (
    <div className="card-wrap">
      <div
        className="news-card-img"
      >
          <CardMedia
            component="img"
            width="180"
            image={srcImg}
            alt='no image'
          />
        </div>

        {/* title and description */}
      <Card
        className="news-card-title"
        onClick={() => openInNewTab(<DetailNewsPage />)}
        // onClick={() => openInNewTab(showArticle.link)}
      >
        <CardActionArea>
        <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="news-title"
            >
              {showArticle.title}
            </Typography>
            <Divider />
            <br />
            <Typography
              gutterBottom
              variant="h7"
              component="div"
              className="news-author"
            >
              Penulis : {showArticle.creator}
              <br />
              Rilis : {moment(getTime).format("LLL")}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              className="news-content"
            >
              {showArticle.description}
            </Typography>
            <Typography
              gutterBottom
              variant="h7"
              component="div"
              className="news-source"
            >
              <br />
              {/* Sumber : {showArticle.source.name}<br /> */}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default NewsArticles;
