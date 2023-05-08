import { forest } from "../../../img/export";
import "./style.scss";

const UpcomingEvents = () => {
  return (
    <div className="UpcomingEvents_ round shadow">
      <div>
        <p className="title">Upcoming Events:</p>
        <img src={forest} alt="forest" />
        <p className="holiday">
          <strong>Holiday</strong>
        </p>
        <p className="time">Friday 15:00</p>
        <div>
          <button class="w3-button w3-block w3-theme-l4">Info</button>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
