import React from 'react'
import { Link } from 'react-router-dom'


function CardItem(props) {
    return (
        <>
        <li className="cards__item">
            <a href={props.url} className="cards__item__link" target='_blank'>
                <figure className="cards__item__pic-wrap" data-category={props.label}>
                    <img src={props.src} alt="Travel Image" className="cards__item__img" />
                </figure>
                <div className="cards__item__info">
                    <h5 className="cards__item__text">{props.text}</h5>
                </div>
                <div className='link-icons'>
                    <a href={props.url1} className='social-icon-link github' target='_blank' aria-label='Github'>
                                <i className='fab fa-github gh'></i>
                            </a>
                    <a href={props.url2} className='social-icon-link link' target='_blank' aria-label='Link'>
                        <i className='fas fa-link'></i>
                    </a>
                </div>
            </a>
        </li>
        </>
    )
}

export default CardItem
