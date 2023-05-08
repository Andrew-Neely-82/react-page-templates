import { form, info, title } from "./index.js";

import "./style.scss";

const Contact = () => {
  return (
    <div className="Contact_">
      <div className="Contact_header_container">
        {title.map((info) => {
          return (
            <>
              <h2 className="Contact_header">{info.h2}</h2>
              <p>
                <i>{info.i}</i>
              </p>
            </>
          );
        })}
      </div>
      <div className="Contact_contact_container">
        {info.map((info) => {
          return (
            <>
              <i className={info.icon}>
                <span className="Contact_">{info.text}</span>
              </i>
            </>
          );
        })}
      </div>
      <form action="#" className="Contact_form_container">
        {form.map((info) => {
          return (
            <>
              <input type="text" placeholder={info.name} name={info.name} />
            </>
          );
        })}
        <button className="Contact_form_button" type="submit">
          SEND
        </button>
      </form>
    </div>
  );
};

export default Contact;
