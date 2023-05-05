import { info, photos } from "./info";
import { useState } from "react";
import "./style.scss";

const Events = () => {
  const [expandedDivId, setExpandedDivId] = useState(null);
  const [showGroups, setShowGroups] = useState(false);
  const [showEvents, setShowEvents] = useState(false);
  const [showPhotos, setShowPhotos] = useState(false);

  const handleClick = (event) => {
    const clickedDivId = event.currentTarget.id;
    setExpandedDivId((prev) => (prev === clickedDivId ? null : clickedDivId));

    if (clickedDivId === "groups") {
      setShowGroups((prev) => !prev);
    } else {
      setShowGroups(false);
    }

    if (clickedDivId === "events") {
      setShowEvents((prev) => !prev);
    } else {
      setShowEvents(false);
    }

    if (clickedDivId === "photos") {
      setShowPhotos((prev) => !prev);
    } else {
      setShowPhotos(false);
    }
  };

  return (
    <div className="Events_ round shadow">
      {info.map((info) => {
        const isExpanded = expandedDivId === info.id;
        const className = `div ${isExpanded ? "expand" : `${info.className}`}`;
        const style = isExpanded && info.id !== "photos" ? { background: "#ccc", color: "black" } : {};

        return (
          <div key={info.id} id={info.id} className={`${info.className} ${className}`} onClick={handleClick} style={style}>
            <i className={info.class}></i>
            {info.text}

            {info.id === "groups" && showGroups && (
              <div class="Events_groups">
                <p>Some text..</p>
              </div>
            )}

            {info.id === "events" && showEvents && (
              <div class="Events_container_expand">
                <p>Some other text..</p>
              </div>
            )}
          </div>
        );
      })}

      {showPhotos && (
        <div className={`photos-container `}>
          {photos.map((img) => {
            return <img src={img.img} alt={img.alt}></img>;
          })}
        </div>
      )}
    </div>
  );
};

export default Events;
