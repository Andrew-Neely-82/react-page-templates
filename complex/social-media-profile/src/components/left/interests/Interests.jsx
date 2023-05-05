import { span } from "./info";
import "./style.scss";

const Interests = () => {
  return (
    <div className="Interests_ round shadow">
      <div className="Interests_container">
        <p>Interests</p>
        <p className="Interests_tags">
          {span.map((info) => {
            return <span className={info.class}>{info.text}</span>;
          })}
        </p>
      </div>
    </div>
  );
};

export default Interests;
