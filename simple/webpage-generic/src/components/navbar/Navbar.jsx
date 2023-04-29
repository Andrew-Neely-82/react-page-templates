import React from "react";
import "./style.scss";

const Navbar = () => {
  const items = [
    { name: "About", href: "#" },
    { name: "Values", href: "#" },
    { name: "News", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Clients", href: "#" },
    { name: "Partners", href: "#" },
  ];

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Logo
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {items.map((item) => (
                <li className="nav-item" key={item.name}>
                  <a className="nav-link" href={item.href}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
