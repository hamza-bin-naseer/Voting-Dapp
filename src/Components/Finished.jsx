import React from "react";
import "./styles.css";

const Finished = () => {
    return (
        <div className="page-container">
            <div className="card">
                <h1 className="card-title text-red">🛑 Voting has Ended</h1>
                <p className="card-subtitle">Results are now visible below.</p>
            </div>
        </div>
    );
};

export default Finished;
