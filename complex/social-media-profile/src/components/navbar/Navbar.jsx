import { avatar2 } from "../../img/export";
import "./style.scss";

const Navbar = () => {
  return (
    <div className="Navbar_">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#navbar">
            <i class="fa fa-home w3-margin-right"></i>&nbsp;Logo
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#navbar">
                  <i class="fa fa-globe"></i>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#navbar">
                  <i class="fa fa-user"></i>
                  <span className="nav-link-span">Link 2</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#navbar">
                  <i class="fa fa-envelope"></i>
                  <span className="nav-link-span">Link 3</span>
                </a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#navbar" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i class="fa fa-bell"></i>
                  <span className="nav-link-span">My Profile</span>
                  <span class="w3-badge w3-right w3-small w3-green">3</span>
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="#navbar">
                      One new friend request
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#navbar">
                      John Doe posted on your wall
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#navbar">
                      Jane likes your post
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="img-container">
            <img src={avatar2} alt="" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
