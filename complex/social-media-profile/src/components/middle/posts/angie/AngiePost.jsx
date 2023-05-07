import { angie } from "../info.js";

const AngiePost = () => {
  return (
    <div className="Posts_post round shadow">
      {angie.map((info) => {
        return (
          <>
            <div className="Posts_post_container">
              <img src={info.avatar} alt={info.alt} />
              <div className="Posts_post_container_info">
                <h4>{info.name}</h4>
                <span>{info.span}</span>
              </div>
            </div>
            <br />
            <hr />
            <p>{info.q}</p>
            {angie.map((info) => {
              return (
                <>
                  <div className="image-container-angie">
                    <img className={`image image-${info.imgAlt}-angie`} src={info.img} alt={info.imgAlt} />
                  </div>
                </>
              );
            })}
            <p>{info.p}</p>
            <button class="like">
              <i class="fa fa-thumbs-up"></i> &nbsp;Like
            </button>
            <button class="comment">
              <i class="fa fa-comment"></i> &nbsp;Comment
            </button>
          </>
        );
      })}
    </div>
  );
};

export default AngiePost;
