import React from 'react'
import '../App.css'
import {Button} from './Button'
import './HeroSection.css'
import video1 from '../videos/video-1.mp4'


function HeroSection() {
   
    return (
        <div className='hero-container'>
            {/* <video src={video1} autoPlay loop muted /> */}
            <h1>Hi, I'm Nate Cowley</h1>
            <p>What are you waiting for?</p>
            <div className='hero-btns'>
                <a href='#projects'>
                <Button className='btns' buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                    CHECK OUT MY WORK!
                </Button></a>
                
            </div>
        </div>
    )
}

export default HeroSection
