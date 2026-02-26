import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";

import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating
      maxRating={5}
      messages={["terrible", "meh", "good ", "nice", "excellent"]}
    />
    <StarRating
      maxRating={10}
      color={"red"}
      className={"test"}
      defaultRating={3}
      // onSetRating={setMovieRating}
    />
  </React.StrictMode>,
);
