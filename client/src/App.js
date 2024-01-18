import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const currentUser = true;
  return (
    // <Router>
    //   <Topbar />
    //   <Switch>
    //     <Route exact path="/">
    //       <Homepage />
    //     </Route>
    //     <Route path="/posts">
    //       <Homepage />
    //     </Route>
    //     <Route path="/register">
    //       {currentUser ? <Homepage /> : <Register />}
    //     </Route>
    //     <Route path="/login">{currentUser ? <Homepage /> : <Login />}</Route>
    //     <Route path="/post/:id">
    //       <Single />
    //     </Route>
    //     <Route path="/write">{currentUser ? <Write /> : <Login />}</Route>
    //     <Route path="/settings">
    //       {currentUser ? <Settings /> : <Login />}
    //     </Route>
    //   </Switch>
    // </Router>

    <div>
=        <Topbar/>
        <Routes>
          <Route exact path="/" element={<Homepage/>}/>
          <Route path="/register" element={<Register/>} />
          <Route path="/write" element={<Write/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/settings" element={<Settings/>} />
          <Route path="/posts" element={<Homepage/>} />
          
        </Routes>
    </div>
  );
}

export default App;
