import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

// photos
import nz from '../images/new-zealand.jpg'
import todo from '../images/todo.png'
import storySquad from '../images/story-squad.png'
import Plants from '../images/plants.jpg'
import kickstarter from '../images/kickstart.jpg'

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out my work!</h1>
            <div className='cards__container'>
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src={kickstarter}
                        text="This is a RESTful API built for a kickstarter app that allows you to Register, Login, Start, Edit, and Delete Campaigns. Works with data science to determine the success of the campaign."
                        label='Kickstarter REST API'
                        url='https://documenter.getpostman.com/view/12253302/TVKEVbXn'
                        url1='https://github.com/buildweek-kickstarter/back-end'
                        url2='https://documenter.getpostman.com/view/12253302/TVKEVbXn'
                        />
                        <CardItem 
                        src={storySquad}
                        text="Story Squad attempts to turn 'reluctant readers' into authors and illustrators through a collaborative world-building game."
                        label='Story Squad'
                        url='https://www.youtube.com/watch?v=fo_eAq-__RE'
                        url1='https://github.com/natethegreat5413/story-squad-fe-b'
                        url2='https://www.youtube.com/watch?v=fo_eAq-__RE'
                        />
                    </ul>    
                    <ul className="cards__items">
                        <CardItem 
                        src={todo}
                        text="This will help you keep track of the things that need to get done during the day."
                        label='My To-Do List'
                        url='https://react-todo-eight-woad.vercel.app/'
                        url1='https://github.com/natethegreat5413/React-Todo/tree/nate-cowley-2'
                        url2='https://react-todo-eight-woad.vercel.app/'
                        />
                        <CardItem 
                        src={Plants}
                        text="An app for all the plant lovers out there who just need a simple reminder when they need to water their plants each week."
                        label='Water My Plants'
                        url='https://front-end-nine-theta.now.sh/'
                        url1='https://github.com/natethegreat5413/front-end?organization=natethegreat5413&organization=natethegreat5413'
                        url2='https://front-end-nine-theta.now.sh/'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
