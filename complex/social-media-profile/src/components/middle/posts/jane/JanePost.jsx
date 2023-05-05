import { jane } from "../info";

const JanePost = () => {
  return (
    <div className="Posts_post round shadow">
      {jane.map((info) => {
        return (
          <>
            <img src={info.img} alt={info.alt} />
            <span>{info.span}</span>
            <h4>{info.name}</h4>
            <br />
            <hr />
            <p>{info.p}</p>
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

export default JanePost;
