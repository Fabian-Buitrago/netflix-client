import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { Link, useLocation } from "react-router-dom";
import "./watch.scss";

const Watch = () => {
  const location = useLocation();
  const state = location.state;
  const movie = state.movie;

  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlinedIcon />
          Home
        </div>
      </Link>

      <video
        className="video"
        progress="true"
        autoPlay
        controls
        src={movie.video}
      />
    </div>
  );
};

export default Watch;
