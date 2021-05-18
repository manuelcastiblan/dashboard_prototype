import React from 'react';
import './styles/toggle.css';

export default function Toggle ({toggled, onClick }){
    return (
        <div onClick={onClick} className={`toggle${toggled ? " night" : ""}`}>
            <div className="notch">
                
            </div>
            
        </div>
    );
}