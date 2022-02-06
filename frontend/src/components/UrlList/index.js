import React from "react";
import Url from "../Url";
import "./index.css";
import { useUrlContext } from "../../context/UrlContext";

export default function UrlList() {
  const { urls } = useUrlContext();
  const urlList = urls.map((url, index) => <Url key={url.urlId.S} url={url} />);

  return (
    <div className="leftContainer">
      <p className="urlCreationTitle">URL List 😎</p>
      {urlList.length > 0 ? urlList : <h3>nothing to see 😒</h3>}
    </div>
  );
}
