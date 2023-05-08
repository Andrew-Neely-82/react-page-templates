import "./style.scss";

const Simple = () => {
  const images = [
    {
      link: `https://www.w3schools.com/w3css/img_temp_startpage.jpg`,
      text: "Start Page Template",
    },
    {
      link: "https://www.w3schools.com/w3css/img_temp_art.jpg",
      text: "Art Template",
    },
    {
      link: "https://www.w3schools.com/w3css/img_temp_webpage.jpg",
      text: "Web Page Template",
    },
  ];

  return (
    <div className="Simple_">
      <h3>Simple</h3>
      <div className="Simple_wrapper">
        {images.map((image) => {
          return (
            <div className="Simple_container">
              <p>{image.text}</p>
              <img src={image.link} alt={image.text} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Simple;
