import React from 'react';
import ReactDOM from 'react-dom';
import "./styles/style.css";
import Footer from "./components/Footer";
import UploadBox from "./components/UploadBox";

ReactDOM.render(
  <div className="wrapper">
    <UploadBox />
    <Footer />
  </div>,
  document.querySelector("#root")
);
