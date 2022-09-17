import React from "react";

export default function Main(props) {
    console.log(props);

    return (
        <section className="main-section section">
            <img className="main-section-image" src={props.image} alt="" />
            <div className="main-info">
                <div className="main-location-info">
                    <i className="fa-solid fa-location-dot main-location-icon"></i>
                    <p className="main-location">{props.location}</p>
                    <a className="main-location-link" href={props.map}>
                        View on Google Maps
                    </a>
                </div>
                <h2 className="main-location-title">{props.title}</h2>
                <p className="main-location-date">
                    {props.startDate} - {props.endDate}
                </p>
                <p className="main-location-description">{props.description}</p>
            </div>
        </section>
    );
}
