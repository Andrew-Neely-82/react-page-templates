import { avatar } from "../../img/export.js";
import "./style.scss";

const Bio = () => {
  return (
    <div className="Bio_ shadow">
      <img className="Bio_img" src={avatar} alt="avatar" title="avatar" />
      <div className="Bio_container">
        <h4 className="Bio_container_title">My Name</h4>
        <p className="Bio_container_info">Just me, myself and I, exploring the universe of uknownment. I have a heart of love and a interest of lorem ipsum and mauris neque quam blog. I want to share my world with you.</p>
      </div>
    </div>
  );
};

export default Bio;
