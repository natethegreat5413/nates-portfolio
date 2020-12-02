import React from 'react'
import { Button } from './Button'
// import { Link } from 'react-router-dom'
// import { useHistory } from 'react-router-dom';
import './Footer.css'
import mailgo from 'mailgo'

function Footer() {
    mailgo()
    /////// CONTACT PAGE ON HOLD FOR NOW ///////
    // const {push} = useHistory()
    // const contact = () => {
    //     push('/contact')
    // }

    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <div className='input-areas'>
                    <a href='mailto:nathancowley12@gmail.com' >
                        <Button 
                        className='btns' 
                        buttonStyle='btn--outline' 
                        buttonSize='btn--large'>
                            Email Me
                        </Button>
                    </a>
                </div>

                <p>or connect with me on Social Media.</p>
            </section>

            <section className='social-media'>
                <div className='social-media-wrap'>
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
