// Library imports
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Components
import App from "./App.tsx";
import Movie from "./pages/Movie/Movie.tsx";

// Styling
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/movie",
    element: <Movie />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
