import FB from '../../public/facebook.png'
import Twitter from '../../public/twitter.png'
import Insta from '../../public/instagram.png'
import Linkedin from '../../public/linkedin.png'

function Footer() {

    return (
        <>
            <img src='/public/Logo.svg'></img>
            <ul title="Doormat Navigation">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#reservations">Reservations</a></li>
                <li><a href="#order">Order Online</a></li>
                <li><a href="#login">Login</a></li>
            </ul>
            <ul title="Contact Us">
                <li>Address</li>
                <li>Phone Number</li>
                <li>Email</li>
            </ul>
            <ul title="Social Media Links">
                <li><FB/></li>
                <li><Twitter/></li>
                <li><Insta/></li>
                <li><Linkedin/></li>
            </ul>
        </>
    );

}

export default Footer;