import { Route, Routes } from "react-router-dom";
import Page from "./templates/page";
import Homepage from "./templates/homepage";

import React from 'react';



function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/page" element={<Page />} />
    </Routes>
  );
}

export default App;
