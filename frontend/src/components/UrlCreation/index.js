import React from "react";
import "./index.css";

export default function UrlCreation() {
  return (
    <div className="rightContainer">
      <p className="urlCreationTitle">URL Shortener</p>
      <input className="longUrlInput" placeholder="Enter Long Url" />
      <button className="createUrlButton">Create Short Url</button>
    </div>
  );
}
