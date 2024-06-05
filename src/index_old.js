import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
// import Contact from "./components/contact";
// import Projects from "./components/projects";
import NotFoundPage from "./components/NotFoundPage";

const root = document.getElementById('root');

if (!root) {
  throw new Error("No root element found");
}

createRoot(root).render(
  <React.StrictMode>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          {/* <Route exact path="/contact" element={<Contact />}/>
          <Route exact path="/projects" element={<Projects />}/> */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
  </React.StrictMode>
);