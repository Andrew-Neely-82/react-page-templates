import "./style.scss";

const Moderate = () => {
  const images = [
    {
      link: `https://www.w3schools.com/w3css/img_temp_blog.jpg`,
      text: "Blog Template",
    },
    {
      link: "https://www.w3schools.com/w3css/img_temp_fifty.jpg",
      text: "Screen 50/50 Template",
    },
  ];

  return (
    <div className="Moderate_">
      <h3>Moderate</h3>
      <div className="Moderate_wrapper">
        {images.map((image) => {
          return (
            <div className="Moderate_container">
              <p>{image.text}</p>
              <img src={image.link} alt={image.text} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Moderate;
