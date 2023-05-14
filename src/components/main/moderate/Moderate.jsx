import "./style.scss";

const Moderate = () => {
  const images = [
    {
      text: "Blog Template",
      href: "https://andrew-neely-82.github.io/Blog-Template-w3.css/",
      link: `https://www.w3schools.com/w3css/img_temp_blog.jpg`,
    },
    {
      text: "Screen 50/50 Template",
      href: "https://andrew-neely-82.github.io/50-50-template.w3.css/",
      link: "https://www.w3schools.com/w3css/img_temp_fifty.jpg",
    },
  ];

  return (
    <div className="Moderate_">
      <h3>Moderate React Templates</h3>
      <div className="Moderate_wrapper">
        {images.map((image) => {
          return (
            <div className="Moderate_container">
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

export default Moderate;
