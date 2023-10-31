import { Link } from 'react-router-dom'

function Nav() {

    const style = {
        fontSize: 18,
        fontFamily: 'Karla',
        fontWeight: '800',
        textTransform: 'capitalize',
        wordWrap: 'break-word'
    }

    return (
        <nav className='nav'>
            <Link to="/" style={style}>Home</Link>
            <Link to="/about" style={style}>About</Link>
            <Link to="/menu" style={style}>Menu</Link>
            <Link to="/reservations" style={style}>Reservations</Link>
            <Link to="/order" style={style}>Order Online</Link>
            <Link to="/login" style={style}>Login</Link>
        </nav>
    );

}

export default Nav;