// Libraries
import { useState } from "react";

// Components
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";

// Styling
import "./home.scss";

const Home = () => {
  const [viewMode, setViewMode] = useState("grid");

  return (
    <div className="home">
      <div className="intro">
        <video
          playsInline
          autoPlay
          muted
          loop
          poster="./images/cinema.png"
          className="intro_video"
        >
          <source src="./videos/cinema.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="intro_description">
          <h1>Moviely</h1>
          <p>
            Your all time favorite destination for making your Friday movie
            nights better.
          </p>
        </div>
      </div>

      <div className="movies">
        <div className="options">
          <SearchBar />

          <div className="options_view">
            <p
              className={`options_table ${
                viewMode === "table" && "options_switch_active"
              }`}
              onClick={() => setViewMode("table")}
            >
              <img
                src="./icons/table.svg"
                alt="Table Icon"
                height={24}
                width={24}
              />
              Table
            </p>
            <p
              className={`options_grid ${
                viewMode === "grid" && "options_switch_active"
              }`}
              onClick={() => setViewMode("grid")}
            >
              <img
                src="./icons/grid.svg"
                alt="Grid Icon"
                height={24}
                width={24}
              />
              Grid
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {};

export default Home;
