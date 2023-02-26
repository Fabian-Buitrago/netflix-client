import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import { AuthContext } from "./authContext/AuthContext";

import "./app.scss";

const App = () => {
  const { user } = useContext(AuthContext);
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={user ? <Home /> : <Navigate to="/register" />}
      />
      <Route
        exact
        path="/register"
        element={!user ? <Register /> : <Navigate to="/" />}
      />
      <Route
        exact
        path="/login"
        element={!user ? <Login /> : <Navigate to="/" />}
      />
      {user && (
        <>
          <Route path="/movies" element={<Home type="movie" />} />
          <Route path="/series" element={<Home type="series" />} />
          <Route path="/watch" element={<Watch />} />
        </>
      )}
    </Routes>
  );
};

export default App;
