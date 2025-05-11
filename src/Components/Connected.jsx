import React from "react";
import "./styles.css";

const Connected = (props) => {
    return (
        <div className="page-container">
            <div className="card wide-card">
                <h1 className="card-title">✅ You're Connected</h1>
                <p className="info-line"><strong>Wallet:</strong> {props.account}</p>
                <p className="info-line"><strong>Remaining Time:</strong> <span className="badge time-badge">{props.remainingTime}</span></p>

                {props.showButton ? (
                    <p className="badge vote-badge">🗳️ You have already voted</p>
                ) : (
                    <div className="vote-input-group">
                        <input
                            type="number"
                            placeholder="Enter Candidate Index"
                            value={props.number}
                            onChange={props.handleNumberChange}
                        />
                        <button className="main-button" onClick={props.voteFunction}>Vote</button>
                    </div>
                )}

                <table className="candidates-table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Votes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.candidates.map((candidate, index) => (
                            <tr key={index}>
                                <td>{candidate.index}</td>
                                <td>{candidate.name}</td>
                                <td>{candidate.voteCount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Connected;
