import React from 'react'
import '../App.css'
import './HeroSection.css'
import ReactTypingEffect from 'react-typing-effect'
import {Button} from './Button'

// import video1 from '../videos/video-1.mp4'


const ReactTypingEffectDemo = () => {
    return (
      <>
        <ReactTypingEffect
          text={["I'm a Software Engineer", "I love Podcasts, dirtbikes, and film", "and I love to code!"]}
          speed={100}
          eraseSpeed={100}
          typingDelay={1000}
          eraseDelay={1000}
          cursorRenderer={cursor => <h2>{cursor}</h2>}
          displayTextRenderer={(text, i) => {
            return (
              <h2>
                {text.split('').map((char, i) => {
                  const key = `${i}`;
                  return (
                    <span
                      key={key}
                      style={i%1 === 0 ? { color: 'white'} : {}}
                    >{char}</span>
                  );
                })}
              </h2>
            );
          }}        
        />
      </>
    );
  };


function HeroSection() {
   
    return (
        <div className='hero-container'>
            {/* <video src={video1} autoPlay loop muted /> */}
            <h1>Hi, I'm Nate Cowley</h1>
    <h2>{ReactTypingEffectDemo()}</h2>
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
