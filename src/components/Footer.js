import React from 'react'
import './CSS/Footer.css'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
function Footer() {
    return (
        <div className="footer-wrapper">
            <div className="info">
                <h4>Want a Self-Motivated Developer? Contact Me Now!</h4>
                
            </div>
            <div className="icons">
                <a href="https://github.com/saullionlee66" target="blank"><GitHubIcon fontSize="large" /></a>
                <a href="https://www.linkedin.com/in/saul-lee-9a283659/" target="blank"><LinkedInIcon  fontSize="large" /></a>
                <a href="mailto:saullionlee@gmail.com"><EmailIcon fontSize="large" /></a>
            </div>
        </div>
    )
}

export default Footer
