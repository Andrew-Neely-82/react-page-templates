import { john } from "../info";

const JohnPost = () => {
  return (
    <div className="Posts_post round shadow">
      {john.map((info) => {
        return (
          <>
            <div className="Posts_post_container">
              <img src={info.img} alt={info.alt} />
              <div className="Posts_post_container_info">
                <h4>{info.name}</h4>
                <span>{info.span}</span>
              </div>
            </div>
            <br />
            <hr />
            <p>{info.p}</p>
            {john.map((info) => {
              return (
                <>
                  <div className="image-container">
                    <img className={`image image-${info.img1Alt}`} src={info.img1} alt={info.img1Alt} />
                    <img className={`image image-${info.img2Alt}`} src={info.img2} alt={info.img2Alt} />
                  </div>
                </>
              );
            })}
            <button class="like">
              <i class="fa fa-thumbs-up"></i> &nbsp;Like
            </button>
            <button class="comment">
              <i class="fa fa-comment"></i> &nbsp;Comment
            </button>{" "}
          </>
        );
      })}
    </div>
  );
};

export default JohnPost;
