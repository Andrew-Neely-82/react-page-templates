import { JohnPost, JanePost, AngiePost } from "./import";
import "./style.scss";

const Posts = () => {
  return (
    <div className="Posts_">
      <JohnPost />
      <br />
      <JanePost />
      <br />
      <AngiePost />
      <br />
      <br />
    </div>
  );
};

export default Posts;
