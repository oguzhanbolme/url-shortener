import React, { useState } from "react";
import "./index.css";
import { updateUrl, deleteUrl } from "../../api/UrlApi";
import { useUrlContext } from "../../context/UrlContext";

export default function Url({ url }) {
  const [origUrl, setOrigUrl] = useState(url.origUrl.S);
  const { setUrls } = useUrlContext();

  return (
    <div className="urlContainer">
      <input
        onChange={(e) => setOrigUrl(e.target.value)}
        value={origUrl}
        className="longUrlInput"
      />
      <button
        onClick={() => updateUrl(url.urlId.S, origUrl)}
        className="crudButton"
      >
        update
      </button>
      <button
        onClick={() =>
          deleteUrl(url.urlId.S).then(() => {
            setUrls((prevUrls) =>
              prevUrls.filter((_url) => _url.urlId.S !== url.urlId.S)
            );
          })
        }
        className="crudButton"
      >
        delete
      </button>
      <button
        onClick={() =>
          navigator.clipboard.writeText(url.shortUrl.S).then(() => {
            alert("Shortened Url Copied!");
          })
        }
        className="crudButton"
      >
        copy
      </button>
    </div>
  );
}
