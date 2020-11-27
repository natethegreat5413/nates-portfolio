import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

// photos
import nz from '../images/new-zealand.jpg'
import todo from '../images/todo.png'
import storySquad from '../images/story-squad.png'

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out my work!</h1>
            <div className='cards__container'>
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src={nz}
                        text="Explore the hidden waterfall deep inside the amazon Jungle"
                        label='Adventure'
                        path='/about'
                        />
                        <CardItem 
                        src={storySquad}
                        text="Story Squad attempts to turn 'reluctant readers' into authors and illustrators through a collaborative world-building game."
                        label='Story Squad'
                        path='/'
                        />
                    </ul>    
                    <ul className="cards__items">
                        <CardItem 
                        src={todo}
                        text="This will help you keep track of the things that need to get done during the day."
                        label='Get Stuff Done'
                        path='/'
                        />
                        <CardItem 
                        src={todo}
                        text="This will help you keep track of the things that need to get done during the day."
                        label='Get Stuff Done'
                        path='/'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
