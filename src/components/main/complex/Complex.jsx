import "./style.scss";

const Complex = () => {
  const images = [
    {
      text: "Interior Design Template",
      href: "https://andrew-neely-82.github.io/interior-template-w3.css/",
      link: `https://www.w3schools.com/w3css/img_temp_interior_design.jpg`,
    },
    {
      text: "Social Media Template",
      href: "https://andrew-neely-82.github.io/social-media-w3.css/",
      link: "https://www.w3schools.com/w3css/img_temp_social.jpg",
    },
  ];

  return (
    <div className="Complex_">
      <h3>Complex React Templates</h3>
      <div className="Complex_wrapper">
        {images.map((image, key) => {
          return (
            <div key={key} className="Complex_container">
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

export default Complex;
