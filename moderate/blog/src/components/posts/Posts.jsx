import { postInfo } from "./postInfo";
import "./style.scss";

const Posts = () => {
  return (
    <div className="Post_ shadow">
      <div className="Posts_header">
        <h4 className="Posts_header_title">Popular Posts</h4>
      </div>
      {postInfo.map((post) => {
        return (
          <>
            <div className={`Post_post-container ${post.border ? "border" : ""}`}>
              <img className="Posts_image" src={post.image} alt={post.alt} title={post.alt} />
              <div className="Post_info_container">
                <span className="Post_info_title">{post.title}</span>
                <span className="Post_info_text">{post.text}</span>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Posts;
