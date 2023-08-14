import React, { useState } from "react";
import axios from "axios";
import { saveAs } from "file-saver";
import shivadp from "./shivadp.jpg";
import Mypdf from "./mypdf";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./main";

import "./App.css";

function ImageUploader() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Main />} />

        <Route exact path="/mypdf" element={<Mypdf />} />
      </Routes>
    </Router>
  );
}

export default ImageUploader;
