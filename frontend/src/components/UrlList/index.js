import React, { useState } from "react";
import Url from "../Url";
import "./index.css";

export default function UrlList() {
  const [urls, setUrls] = useState([
    { origUrl: "https://www.youtube.com/", shortUrl: "short1" },
    { origUrl: "https://www.youtube.com/", shortUrl: "short1" },
    { origUrl: "https://www.youtube.com/", shortUrl: "short1" },
  ]);

  const urlList = urls.map((url, index) => <Url key={index} url={url} />);

  return (
    <div className="leftContainer">
      <p className="urlCreationTitle">URL List</p>
      {urlList}
    </div>
  );
}
