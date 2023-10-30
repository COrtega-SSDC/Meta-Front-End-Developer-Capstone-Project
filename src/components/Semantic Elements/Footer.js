import Facebook from '../../images/facebook.png'
import Twitter from '../../images/twitter.png'
import Insta from '../../images/instagram.png'
import LinkedIn from '../../images/linkedin.png'

import logo from '../../images/logo.png'

function Footer() {

    return (
        <>
            <img src={logo} alt="Little Lemon Logo"/>
            <h3>Doormat Navigation</h3>
            <ul title="Doormat Navigation">
                <li><a href="/home">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/menu">Menu</a></li>
                <li><a href="/reservations">Reservations</a></li>
                <li><a href="/order">Order Online</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
            <h3>Contact Us</h3>
            <ul title="Contact Us">
                <li>Address</li>
                <li>Phone Number</li>
                <li>Email</li>
            </ul>
            <h3>Social Media Links</h3>
            <ul title="Social Media Links">
                <li><img src={Facebook} alt="Little Lemon Logo"/></li>
                <li><img src={Twitter} alt="Little Lemon Logo"/></li>
                <li><img src={Insta} alt="Little Lemon Logo"/></li>
                <li><img src={LinkedIn} alt="Little Lemon Logo"/></li>
            </ul>
        </>
    );

}

export default Footer;