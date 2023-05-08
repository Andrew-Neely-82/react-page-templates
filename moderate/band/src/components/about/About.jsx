import { about, people } from "./index.js";
import "./style.scss";

const About = () => {
  return (
    <div className="About_">
      {about.map((info) => {
        return (
          <>
            <h2 className="About_header">{info.h2}</h2>
            <p className="About_music">
              <i>{info.i}</i>
            </p>
            <p className="About_info">{info.p}</p>
          </>
        );
      })}
      <div className="About_members">
        {people.map((info) => {
          return (
            <>
              <p className="About_members_name">{info.name}</p>
              <img src={info.img} alt={info.alt} title={info.alt} />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default About;
