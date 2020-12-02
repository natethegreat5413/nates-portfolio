import React, {useState, useEffect} from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

const showButton = () => {
    if(window.innerWidth <= 960) {
        setButton(false)
    }else{
        setButton(true)
    }
}

// this makes it so the button doesn't show up after every refresh
useEffect(() => {
    showButton();
}, [])

window.addEventListener('resize', showButton)

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    
                    <a href='#heroSection' className="navbar-logo" onClick={closeMobileMenu}>
                        NC <i className='fab fa-typo3' />
                    </a>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <a href='#heroSection' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href='#about-section' className='nav-links' onClick={closeMobileMenu}>
                            About
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href='#projects' className='nav-links' onClick={closeMobileMenu}>
                            Projects
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href='#footer' className='nav-links' onClick={closeMobileMenu}>
                            Contact
                        </a>
                    </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
