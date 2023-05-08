import { JohnPost, JanePost, AngiePost } from "./import";
import "./style.scss";

const Posts = () => {
  const currentPosts = [JohnPost, JanePost, AngiePost];

  return (
    <div className="Posts_">
      {currentPosts.map((PostComponent) => {
        return (
          <>
            <PostComponent />
            <br />
          </>
        );
      })}
      <br />
    </div>
  );
};

export default Posts;
