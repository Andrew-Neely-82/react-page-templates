import "./style.scss";

const Simple = () => {
  const images = [
    {
      link: `https://www.w3schools.com/w3css/img_temp_startpage.jpg`,
      text: "Start Page Template",
      href: "https://andrew-neely-82.github.io/business-page-w3.css/",
    },
    {
      link: "https://www.w3schools.com/w3css/img_temp_art.jpg",
      text: "Art Template",
      href: "https://andrew-neely-82.github.io/Street-Page-w3.css/",
    },
    {
      link: "https://www.w3schools.com/w3css/img_temp_webpage.jpg",
      text: "Web Page Template",
      href: "https://andrew-neely-82.github.io/Web-Page-w3.css/",
    },
  ];

  return (
    <div className="Simple_">
      <h3>Simple React Templates</h3>
      <div className="Simple_wrapper">
        {images.map((image, key) => {
          return (
            <div key={key} className="Simple_container">
              <p>{image.text}</p>
              <a href={image.href} target="_blank" rel="noreferrer">
                <img src={image.link} alt={image.text} />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Simple;
