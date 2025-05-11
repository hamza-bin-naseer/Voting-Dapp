import React from "react";
import "./styles.css";

const Login = (props) => {
    return (
        <div className="page-container">
            <div className="card">
                <h1 className="card-title">🎯 Decentralized Voting</h1>
                <p className="card-subtitle">Secure • Transparent • Blockchain-Based</p>
                <button className="main-button" onClick={props.connectWallet}>
                    🔒 Connect with MetaMask
                </button>
            </div>
        </div>
    );
};

export default Login;
