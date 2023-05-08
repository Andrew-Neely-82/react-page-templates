import "./style.scss";

const Complex = () => {
  const images = [
    {
      link: `https://www.w3schools.com/w3css/img_temp_interior_design.jpg`,
      text: "Interior Design Template",
    },
    {
      link: "https://www.w3schools.com/w3css/img_temp_social.jpg",
      text: "Social Media Template",
    },
  ];

  return (
    <div className="Complex_">
      <h3>Complex</h3>
      <div className="Complex_wrapper">
        {images.map((image) => {
          return (
            <div className="Complex_container">
              <p>{image.text}</p>
              <img src={image.link} alt={image.text} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Complex;
