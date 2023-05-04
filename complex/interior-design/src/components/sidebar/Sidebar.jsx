import { links } from "./info";
import "./style.scss";

const Sidebar = () => {
  return (
    <div className="Sidebar_" id="sidebar">
      <br />
      <div className="Sidebar_title-container">
        <h3>
          Company
          <br />
          Name
        </h3>
      </div>
      <div class="Sidebar_links-container">
        {links.map((info) => {
          return <a href={info.href}>{info.text}</a>;
        })}
      </div>
    </div>
  );
};

export default Sidebar;
