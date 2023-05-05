import { forest } from "../../../img/export";
import "./style.scss";

const UpcomingEvents = () => {
  return (
    <div className="UpcomingEvents_ round shadow">
      <div>
        <p>Upcoming Events:</p>
        <img src={forest} alt="forest" />
        <p>
          <strong>Holiday</strong>
        </p>
        <p>Friday 15:00</p>
        <p>
          <button class="w3-button w3-block w3-theme-l4">Info</button>
        </p>
      </div>
    </div>
  );
};

export default UpcomingEvents;
