import React from 'react';
import '../App.css';
import { Button } from "./Button";
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/videos/video-2.mp4" autoPlay loop muted />
            <h1 style={{ color: 'red' }}>Connecting People, covering the distance </h1>
            <p style={{ color: 'red' }}>What are you waiting for?</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>GET STARTED FOR DRIVERS</Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>WATCH HOW TO USE  <i className='far fa-play-circle'/></Button>
            </div>

        </div>
    );
}

export default HeroSection;
