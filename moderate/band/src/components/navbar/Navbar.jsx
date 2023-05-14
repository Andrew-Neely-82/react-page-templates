import { navLinks } from "./index.js";
import "./style.scss";

const Navbar = () => {
  return (
    <div className="Navbar_">
      <div className="Navbar_Links">
        <ul>
          {navLinks.map((link, index) => {
            if (link.drop) {
              return (
                <li key={index}>
                  <a href="#" className="Navbar_dropdown-toggle">
                    {link.more} <i className="fa fa-caret-down"></i>
                  </a>
                  <ul className="Navbar_dropdown-menu">
                    {Object.values(link.drop).map((item, index) => (
                      <li key={index}>
                        <a href="#">{item}</a>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            } else {
              return (
                <li key={index}>
                  <a href={link.link}>{link.label}</a>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
