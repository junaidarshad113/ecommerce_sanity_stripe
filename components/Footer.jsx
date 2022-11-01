import React from 'react'
import { AiFillInstagram, AiOutlineLinkedin, AiFillFacebook, AiOutlineGoogle, AiOutlineGithub  } from 'react-icons/ai'

const Footer = () => {
    return (
        <div className='footer-container'>
            <p>2022 JD Headphones All rights reserverd</p>
            <p className='icons' > 
            <a href='https://mail.google.com/mail/u/0/#inbox'><AiOutlineGoogle/></a>
            <a href='https://www.instagram.com/rokxx.jd/'><AiFillInstagram/></a>
            <a href='https://www.linkedin.com/in/junaid-arshad-%F0%9F%8C%9F-mern-stack-developer-6810a81b1/'><AiOutlineLinkedin/></a>
            <a href='https://www.facebook.com/junaid.satti.54/'><AiFillFacebook/></a>
            <a href='https://github.com/junaidarshad113'><AiOutlineGithub/></a>
            </p>
        </div>
    )
}

export default Footer