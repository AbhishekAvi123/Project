import { Routes, Route } from "react-router-dom";


import Cardupload from "./Components/Cardupload";


export default function App() {
  return (
    <Routes className="App">

<Route path="/Cardupload" element={< Cardupload />} />

   


    </Routes>
  );
}
