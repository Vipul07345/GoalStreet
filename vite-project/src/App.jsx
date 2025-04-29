



import React from 'react'
import { Route,BrowserRouter,Routes } from "react-router-dom";





import Login from "./Project/pages/Login";
import Home from "./Project/components/Home";
import TopBar from "./Project/components/TopBar";
import Register from "./Project/pages/Register";
import Write from "./Project/pages/Write";
import Settings from "./Project/components/Settings";
import Single from "./Project/components/Single";








const App = () => {
  const user = true;
  return (
    <div>
      
    <BrowserRouter>
    <TopBar/>
    <div> 
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/register" element={user ? <Home/> : <Register/>}/>
      <Route path="/login" element={user ? <Home/> : <Login/>}/>
      <Route path="/write" element={ user ? <Write/> : <Register/>}/>
      <Route path="/settings" element={user ? <Settings/> : <Register/>}/>
      <Route path="/post/:postid" element={<Single/>}/>
    </Routes>
    </div>
          </BrowserRouter>
          
    </div>
    
  
  )
}

export default App


