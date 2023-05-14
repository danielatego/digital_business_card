import fb from './images/fb.svg'
import tw from './images/tweet.svg'
import gt from './images/git.svg'
import ins from './images/insta.svg'

export default function Footer() {
    return(
        <footer className='footer'>
            <img src={tw} alt="" />
            <img className = 'midi' src={fb} alt="" />
            <img className = 'midi2'src={ins} alt="" />
            <img src={gt} alt="" />
        </footer>
    )
}