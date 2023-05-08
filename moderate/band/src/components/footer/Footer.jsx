import { socials, footerText } from "./index.js";
import "./style.scss";

const Footer = () => {
  return (
    <div className="Footer_">
      {socials.map((info) => {
        return (
          <div key={info.logo}>
            <div className="Footer_socials">
              <i className={`${info.logo}`}></i>
            </div>
          </div>
        );
      })}
      <div className="Footer_text_container">
        {footerText.map((footer) => {
          return (
            <p key={footer.p} className="Footer_text">
              {footer.p}
              <a href="#">{footer.a}</a>
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
