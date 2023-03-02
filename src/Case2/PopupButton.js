import React, { useState } from 'react';
import './PopupButton.css';

const PopupButton = () => {
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    return (
        <div>
            <button onClick={togglePopup}>Open Popup</button>
            {showPopup ? (
                <div className="popup">
                    <div className="popup-inner">
                        <h2>Popup Title</h2>
                        <p>Popup content goes here</p>
                        <button onClick={togglePopup}>Close Popup</button>
                    </div>
                </div>
            ) : null}
            {showPopup ? <div className="overlay" onClick={togglePopup}></div> : null}
        </div>
    );
}

export default PopupButton;