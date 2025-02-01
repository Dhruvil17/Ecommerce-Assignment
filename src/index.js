import "./index.css";
import React from "react";
import AppRouter from "./utils/AppRouter";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);
