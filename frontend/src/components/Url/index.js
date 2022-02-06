import React from "react";
import "./index.css";

export default function Url({ url }) {
  return (
    <div className="urlContainer">
      <input className="longUrlInput" value={url.origUrl} />
      <button className="crudButton">update</button>
      <button className="crudButton">delete</button>
      <button className="crudButton">copy</button>
    </div>
  );
}
