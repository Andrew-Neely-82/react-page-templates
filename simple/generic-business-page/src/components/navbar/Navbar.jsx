import React from "react";
import "./style.scss";

const Navbar = () => {
  const navLinks = [
    { id: 1, name: "Link 1", url: "#" },
    { id: 2, name: "Link 2", url: "#" },
    { id: 3, name: "Link 3", url: "#" },
    { id: 4, name: "Link 4", url: "#" },
  ];

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Home
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            {navLinks.map((link) => (
              <li class="nav-item" key={link.id}>
                <a class="nav-link" href={link.url}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
