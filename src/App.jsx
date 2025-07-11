import React from "react";
import { Routes, Route } from "react-router-dom";
import Contact from "./Component/Contact";
import Sales from "./Component/Sales";
import PaperNotbooks from "./Component/PaperNotbooks";
import Pensmarker from "./Component/Pensmarker";
import Layout from "./Component/Layout";
import Home from "./Home";
import Folder from "./Component/Folder";
import Desk from "./Component/Desk";
import Sign from "./Component/Sign";
import Createaccount from "./Component/Createaccount";

function App() {
  return ( 
    <div className="bg-gray-100 flex overflow-hidden">
      <div className="w-full">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/paper-notebooks" element={<PaperNotbooks />} />
            <Route path="/pens-markers" element={<Pensmarker />} />
            <Route path="/folder" element={<Folder />} />
            <Route path="/desk" element={<Desk />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/sign" element={<Sign />} />
            <Route path="/account" element={<Createaccount />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
