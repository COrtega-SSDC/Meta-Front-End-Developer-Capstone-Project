import {Link} from 'react-router-dom'

function Nav() {

    return (
        <nav>
            <ul>
                <Link to="/" >Home</Link>
                <li><a href="/about">About</a></li>
                <li><a href="/menu">Menu</a></li>
                <li><a href="/reservations">Reservations</a></li>
                <li><a href="/order">Order Online</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
        </nav>
    );

}

export default Nav;