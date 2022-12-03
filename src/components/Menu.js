import React from "react";
import {
  BrowserRouter,
  Navigate,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";
import Blog from "./Blog";
import Recettes from "./Recettes";

const Menu = () => {
  return (
    <BrowserRouter>
      <nav id="menu">
        <ul>
          <li>
            <NavLink
              to="/recettes"
              style={({ isActive }) =>
                isActive ? { borderBottom: "4px solid orange" } : undefined
              }
              end
            >
              Recettes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              style={({ isActive }) =>
                isActive ? { borderBottom: "4px solid orange" } : undefined
              }
              end
            >
              Blog
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/recettes" element={<Recettes />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/" element={<Navigate to="/recettes" />} />
        <Route
          path="*"
          element={
            <div style={{ textAlign: "center" }}>
              <h1>404 Page not found</h1>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Menu;
