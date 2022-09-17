import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import data from "./data.js";
import "./css/App.css";

function App() {
    const info = data.map((detail) => {
        return (
            <Main
                key={detail.id}
                title={detail.title}
                location={detail.location}
                map={detail.googleMapsUrl}
                startDate={detail.startDate}
                endDate={detail.endDate}
                description={detail.description}
                image={detail.imageUrl}
            />
        );
    });

    return (
        <div className="container">
            <Header />
            <section>{info}</section>
        </div>
    );
}

export default App;
