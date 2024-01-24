import React from "react";

export default function Card({ elem }) {
  return (
    <div className="card">
      <img className="card--image" src={elem.imageUrl} />
      <div className="card_body">
        <div>
          <span className="card--location">
            <i className="uil uil-map-marker"></i>
            {elem.location}
          </span>
          <a href={elem.googleMapsUrl} target="blank_" className="card--map">
            View on Google Maps
          </a>
        </div>
        <div className="card--title">{elem.title}</div>
        <div className="card--date">
          {elem.startDate}-{elem.endDate}
        </div>
        <div className="card--subtitle">{elem.description}</div>
      </div>
    </div>
  );
}
