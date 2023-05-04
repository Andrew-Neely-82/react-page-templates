import { header, info } from "./info";
import "./style.scss";

const Services = () => {
  return (
    <div className="Services_" id="services">
      {header.map((info) => {
        return <h1 className={info.class}>{info.text}</h1>;
      })}
      <hr />
      {info.map((info) => {
        return <p>{info.text}</p>;
      })}
    </div>
  );
};

export default Services;
