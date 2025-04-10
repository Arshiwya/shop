import React from "react";
import routes from "./routes";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ThemeContextProvider } from "./Context/Theme.Context";

export default function App() {
  const router = createBrowserRouter(routes);

  return (
    <ThemeContextProvider>
      <RouterProvider router={router} />
    </ThemeContextProvider>
  );
}
