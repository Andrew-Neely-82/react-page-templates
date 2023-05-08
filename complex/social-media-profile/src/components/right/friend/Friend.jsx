import { avatar6 } from "../../../img/export";
import "./style.scss";

const Friend = () => {
  return (
    <div className="Friend_ round shadow">
      <p>Friend Request</p>
      <img src={avatar6} alt="avatar6" />
      <span>Jane Doe</span>
      <div class="Friend_button-wrapper">
        <div class="Friend_button-container">
          <button class="green" title="Accept">
            <i class="fa fa-check"></i>
          </button>
        </div>
        <div class="Friend_button-container">
          <button class="red" title="Decline">
            <i class="fa fa-remove"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Friend;
