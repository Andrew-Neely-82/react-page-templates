import { info } from "./info";
import "./style.scss";

const Hey = () => {
  const handleClickClose = () => {
    const hey = document.querySelector(".Hey_");
    hey.classList.toggle("close");
  };

  return (
    <div className="Hey_ round">
      <span onClick={handleClickClose}>
        <i className="fa fa-remove"></i>
      </span>
      <div className="Hey_container round">
        {info.map((info) => {
          return (
            <p key={info.text} className={info.class}>
              {info.text}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Hey;
