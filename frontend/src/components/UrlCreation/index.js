import React, { useState } from "react";
import "./index.css";
import { createUrl } from "../../api/UrlApi";
import { useUrlContext } from "../../context/UrlContext";

export default function UrlCreation() {
  const [origUrl, setOrigUrl] = useState("");
  const { setUrls } = useUrlContext();

  return (
    <div className="rightContainer">
      <p className="urlCreationTitle">URL Shortener 💩</p>
      <input
        onChange={(e) => setOrigUrl(e.target.value)}
        value={origUrl}
        className="longUrlInput"
      />
      <button
        onClick={() =>
          createUrl(origUrl).then((data) => {
            setUrls((oldArray) => [...oldArray, data]);
            setOrigUrl("");
          })
        }
        className="createUrlButton"
      >
        Create Short Url
      </button>
    </div>
  );
}
