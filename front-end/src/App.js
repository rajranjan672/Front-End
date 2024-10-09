import NavBar from "./Components/NavBar/NavBar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

// lazy loading
const SuperNatural = React.lazy(() => import('./Components/SuperNatural/SuperNatural'))
const Charactors = React.lazy(() => import('./Components/Characters/Characters'))

function App() {
  return (
    <div>
      <div className="mb-5">
      <NavBar />

      </div>
      
      <Routes>
      <Route path="/" element={<Navigate to="/charactors" replace/>} />
      <Route path='/charactors' element={<React.Suspense fallback='Loading...'>
          <Charactors />
        </React.Suspense>}  />
        
      <Route path='/supernaturals' element={<React.Suspense fallback='Loading...'>
          <SuperNatural />
        </React.Suspense>}  />
      </Routes>
      <hr />
    </div>
  );
}

export default App;
