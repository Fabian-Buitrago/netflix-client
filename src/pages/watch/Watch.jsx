import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import "./watch.scss";

const Watch = () => {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlinedIcon />
        Home
      </div>
      <video
        className="video"
        autoPlay
        progress
        controls
        src="https://www.w3schools.com/tags/movie.mp4"
      />
    </div>
  );
};

export default Watch;
