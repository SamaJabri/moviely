// Styling
import "./banner.scss";

const Banner = () => {
  return (
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
          Your all time favorite destination for making your Friday movie nights
          better.
        </p>
      </div>
    </div>
  );
};

export default Banner;
