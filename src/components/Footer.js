import React from 'react'
import {Button} from './Button'
import {Link} from 'react-router-dom'
import './Footer.css'
import { useHistory } from 'react-router-dom';

function Footer() {
    const {push} = useHistory()

    const contact = () => {
        push('/contact')
    }

    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                {/* <p className='footer-subscription-heading'>
                    
                </p>
                <p className='footer-subscription-text'>
                    More text here!
                </p> */}
                <div className='input-areas'>
                    
                        <Button buttonStyle='btn--outline' buttonSize='btn--large' onClick={contact}>Contact Me</Button>
                </div>
                <p>or connect with me through Social Media.</p>
            </section>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    {/* <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            NC <i className='fab fa-typo3' />
                        </Link>
                    </div> */}
                    
                    <div className='social-icons'>
                        <a href='https://www.facebook.com/nate.cowley.7/' className='social-icon-link facebook' target='_blank' aria-label='Facebook'>
                            <i className='fab fa-facebook-f'></i>
                        </a>
                        <a href='https://github.com/natethegreat5413' className='social-icon-link github' target='_blank' aria-label='Github'>
                            <i className='fab fa-github'></i>
                        </a>
                        <a href="https://www.linkedin.com/in/ndcowley/" className='social-icon-link linkedin' target='_blank' aria-label='LinkedIn'>
                            <i className='fab fa-linkedin'></i>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
