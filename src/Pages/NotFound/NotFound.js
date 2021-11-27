import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../Images/error.jpg'
import './Notfound.css'
const NotFound = () => {
    return (
        <div>

            <img className="notfound" src={notfound} alt="" />

            <Link to="/"><button className="notfound-btn">Go Back</button></Link>

        </div>
    );
};

export default NotFound;