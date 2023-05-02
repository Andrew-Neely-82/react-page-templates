import { bridge } from "../../img/export.js";
import "./style.scss";

const Article2 = () => {
  return (
    <div className="Article2_ shadow">
      <img className="Article2_img" src={bridge} alt="bridge" title="bridge" />

      <div className="Article2_info-container">
        <h3 className="Article2_info-container_title">TITLE HEADING</h3>
        <h5 className="Article2_info-container_info">
          Title description, <span class="Article2_info-container_info_span">April 2, 2014</span>
        </h5>{" "}
      </div>

      <div className="Article2_content-container">
        <p className="Article2_content">Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>

        <div className="Article2_bottom-container">
          <div className="Article2_button-container">
            <button className="Article2_button">READ MORE »</button>
          </div>

          <div className="Article2_comments-container">
            <span className="Article2_comments">Comments </span>
            <span className="Article2_comments-count">2</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article2;
