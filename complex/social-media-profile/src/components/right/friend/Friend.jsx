import { avatar6 } from "../../../img/export";
import "./style.scss";

const Friend = () => {
  return (
    <div className="Friend_ round shadow">
      <p>Friend Request</p>
      <img src={avatar6} alt="avatar6" />
      <br />
      <span>Jane Doe</span>
      <div class="w3-row w3-opacity">
        <div class="w3-half">
          <button class="w3-button w3-block w3-green w3-section" title="Accept">
            <i class="fa fa-check"></i>
          </button>
        </div>
        <div class="w3-half">
          <button class="w3-button w3-block w3-red w3-section" title="Decline">
            <i class="fa fa-remove"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Friend;
