import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import {BrowserRouter,Routes, Route } from 'react-router-dom'
import BlogPage from "./Pages/BlogPage";
import Write from "./Pages/Write";
import Profile from "./Pages/Profile";
import Post from "./Pages/Post";
import LogIn from "./Pages/LogIn";
import Register from "./Pages/Register";
import { useContext } from "react";
import { Context } from "./Context/Context";

function App() {
  const {user} = useContext(Context)
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <div className="pages">
          <Routes>
            <Route 
            path="/"
            element={user ? <Home/>: <LogIn/>}
            />
             <Route 
            path="/blogs"
            element={user ? <BlogPage/>: <LogIn/>}
            />
            <Route 
            path="/write"
            element={user ? <Write/> : <LogIn/>}
            />
            <Route 
            path="/profile"
            element={user ? <Profile/> :<LogIn/>}
            />
            <Route  path="/posts/:postId"   element={user ? <Post/>: <Register/>} />
            <Route  path="/login"   element={user ?<Home/>: <LogIn/>} />
            <Route  path="/register"   element={user ? <Home/>: <Register/>} />
          </Routes>
        </div>
     </BrowserRouter>
    </div>
  );
}

export default App;
