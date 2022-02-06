import React from "react";
import UrlList from "./components/UrlList";
import UrlCreation from "./components/UrlCreation";

export default function App() {
  return (
    <div className="App">
      <UrlList />
      <UrlCreation />
    </div>
  );
}
