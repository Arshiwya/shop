import React from "react";
import routes from "./routes";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

export default function App() {
  const router = createBrowserRouter(routes)

  return (
    <RouterProvider router={router}/>
    
  );
}
