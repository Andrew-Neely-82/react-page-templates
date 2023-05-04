import { Info, Basic, Pro } from "./info.js";
import "./style.scss";

const Package = ({ info }) => {
  const isOrange = info.isOrange;
  return (
    <ul key={info.title}>
      <li className={isOrange ? "Package_title orange" : "Package_title"}>{info.title}</li>
      <li className="border">{info.type}</li>
      <li className="border">{info.time}</li>
      <li className="border">{info.photo}</li>
      <li className="border">{info.discount}</li>
      <li className="border">{info.deal}</li>
      <li className="border">
        <h2>{info.price}</h2>
        <span>per room</span>
      </li>
      <li className="button-li">
        <button className={isOrange ? "orange" : ""}>Sign Up</button>
      </li>
    </ul>
  );
};

const Packages = () => {
  return (
    <div className="Packages_" id="packages">
      <div className="Packages_header-container">
        <h1>Packages.</h1>
        <hr />
        <p>
          {Info.map((info) => {
            return info.info;
          })}
        </p>
      </div>
      <div className="Packages_info-container">
        <div className="Packages_basic">
          {Basic.map((info) => {
            return <Package info={info} />;
          })}
        </div>
        <div className="Packages_pro">
          {Pro.map((info) => {
            return <Package info={info} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Packages;
