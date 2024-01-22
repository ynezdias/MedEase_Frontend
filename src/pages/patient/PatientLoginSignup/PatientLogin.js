import React from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';
import StylePatient from './StylePatient'; 


const PatientLogin = () => {
    return (
        <StylePatient>
            <div className="Pt-body">
        <div className="wrapper">
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder="Username" required/>
                    <FaUser className="icon" />

                </div>
                <div className="input-box">
                    <input type="text" placeholder="Password" required/>
                    <FaLock className="icon2" />


                </div>

                <button type="submit">Login</button>

            </form>
        </div>
        </div>
        </StylePatient>
    );
}

export default PatientLogin;