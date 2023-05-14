import { header, months, places } from ".";
import "./style.scss";

const Dates = () => {
  return (
    <div className="Dates_">
      <div className="Dates_content">
        <div className="Dates_header-container">
          {header.map((info) => {
            return (
              <>
                <h2>{info.head}</h2>
                <p>{info.text}</p>
              </>
            );
          })}
        </div>
        <div className="Dates_months-container">
          {months.map((info) => {
            return (
              <>
                <ul>
                  <li>
                    {info.month}
                    {info.isSoldOut ? <span className="Dates_sold-out">Sold out</span> : ""}
                    {info.hasBadge ? <span className="Dates_badge">3</span> : ""}
                  </li>
                </ul>
              </>
            );
          })}
        </div>
        <div className="Dates_places_container">
          {places.map((info) => {
            return (
              <>
                <div className="Dates_places-card">
                  <img src={info.img} alt={info.alt} title={info.alt} />
                  <p className="Dates_place">{info.place}</p>
                  <p className="Dates_date">{info.date}</p>
                  <p className="Dates_description">{info.desc}</p>
                  <button className="Dates_buy-btn">Buy Tickets</button>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dates;
