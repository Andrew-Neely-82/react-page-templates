import { info, designers } from "./info.js";
import "./style.scss";

const Designers = () => {
  return (
    <div className="Designers_" id="designers">
      <div className="Designers_header">
        {info.map((info) => {
          return (
            <>
              <h1>{info.title}</h1>
              <hr />
              <p>{info.p}</p>
              <p>{info.body}</p>
              <p className="bold">{info.bold}</p>
            </>
          );
        })}
      </div>
      <div className="Designers_wrapper">
        {designers.map((info, index) => {
          return (
            <div className="Designers_container" key={index}>
              <img src={info.img} alt={info.name} title={info.name} />
              <div className="Designers_container_info">
                <h3>{info.name}</h3>
                <p className="gray">{info.title}</p>
                <p>{info.info}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Designers;
