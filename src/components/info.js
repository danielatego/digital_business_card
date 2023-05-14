import infoImage from './images/dan.jpg'
import emailIcon from './images/email.svg'
import LinkedInIcon from './images/linkedIn.svg'
export default function Info() {
    return(
        <info className ="info">
            <img src={infoImage} alt="" />
            <h1>Daniel Atego</h1>
            <h3>Full-Stack Developer</h3>
            <h6>danielatego.website</h6>
            <div>
            <button className='emailButton'>
                <img src={emailIcon} alt="" />
                <span>Email</span>
            </button>
            <button className='linkButton'>
                <img src={LinkedInIcon} alt="" />
                <span>LinkedIn</span>
            </button>
            </div>
        </info>
    )
}