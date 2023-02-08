import "./featured.scss";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const Featured = () => {
  return (
    <div className="featured">
      <img
        src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=500&q=80"
        alt=""
      />
      <div className="info">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/The-matrix-logo.svg/1280px-The-matrix-logo.svg.png" alt="" />

        <span className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          minima aperiam molestias magnam quo, totam at asperiores! Perferendis
          ipsum soluta sapiente impedit fugiat rem cum odio, rerum unde deserunt
          pariatur.
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrowIcon />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlinedIcon />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
