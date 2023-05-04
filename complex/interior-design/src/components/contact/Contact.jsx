import { info, form } from "./info.js";
import "./style.scss";

const Contact = () => {
  return (
    <div className="Contact_" id="contact">
      {info.map((info) => {
        return (
          <>
            <h1 className="Contact_title">{info.title}</h1>
            <hr />
            <p>{info.info}</p>
          </>
        );
      })}
      <form className="Contact_form">
        {form.map((form, index) => (
          <div key={index} className="Contact_form-group">
            <label>{form.label}</label>
            <input className="" type="text" name={form.label} />
            <div className="Contact_form-input">{form.input}</div>
          </div>
        ))}
        <button type="submit" className="Contact_form-submit">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
