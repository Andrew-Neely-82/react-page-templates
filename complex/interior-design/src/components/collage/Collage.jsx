import { Images } from "./images";
import { useState } from "react";
import "./style.scss";

const Collage = () => {
  const [selectedImage, setSelectedImage] = useState({ img: null, alt: null, desc: null });

  const handleImageClick = (image) => {
    setSelectedImage({ img: image.img, alt: image.alt, desc: image.desc });
    document.body.classList.add("modal-open");
  };

  const handleCloseModal = () => {
    setSelectedImage({ img: null, alt: null, desc: null });
    document.body.classList.remove("modal-open");
  };

  return (
    <div className="Collage_">
      {Images.map((image) => {
        return <img key={image.id} src={image.img} alt={image.alt} title={image.alt} onClick={() => handleImageClick(image)} className={selectedImage === image ? "selected" : ""} />;
      })}
      {selectedImage.img && (
        <div className="modal">
          <div className="modal-content">
            <img src={selectedImage.img} alt={selectedImage.alt} title={selectedImage.alt} className="selected" />
            <p>{selectedImage.desc}</p>
            <span className="modal-close" onClick={handleCloseModal}>
              ×
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Collage;
