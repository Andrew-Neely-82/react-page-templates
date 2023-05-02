import { woods } from "../../img/export.js";
import "./style.scss";

const Article1 = () => {
  return (
    <div className="Article1_ shadow">
      <img className="Article1_img" src={woods} alt="woods" title="woods" />

      <div className="Article1_info-container">
        <h3 className="Article1_info-container_title">TITLE HEADING</h3>
        <h5 className="Article1_info-container_info">
          Title description, <span class="Article1_info-container_info_span">April 7, 2014</span>
        </h5>{" "}
      </div>

      <div className="Article1_content-container">
        <p className="Article1_content">Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>

        <div className="Article1_bottom-container">
          <div className="Article1_button-container">
            <button className="Article1_button">READ MORE »</button>
          </div>

          <div className="Article1_comments-container">
            <span className="Article1_comments">Comments </span>
            <span className="Article1_comments-count">0</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article1;
