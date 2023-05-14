import { image } from "./index.js";
import "./style.scss";

const Street = () => {
  return (
    <div className="Street_">
      {image.map((img) => {
        return <img src={img.img} alt={img.alt} title={img.alt} />;
      })}
    </div>
  );
};

export default Street;
