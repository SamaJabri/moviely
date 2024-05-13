import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Components
import Home from "./pages/Home/Home";
import Movie from "./pages/Movie/Movie.tsx";
import Header from "./components/Header/Header.tsx";
import Footer from "./components/Footer/Footer.tsx";

// Styling
import "./App.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/movie",
    element: <Movie />,
  },
]);

function App() {
  return (
    <div>
      <Header />

      <div className="layout">
        <div className="layout_content">
          <RouterProvider router={router} />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
