import { Link, NavLink } from 'react-router-dom';
import './header.css'

const Header = () => {
    return (
        <div>
            <h3>Navbar</h3>
            <nav>
                <Link to="/"> Home</Link>
                <NavLink to="/users">Users</NavLink>

                <NavLink to="/posts"> Posts</NavLink>
                <Link to="/about"> About</Link>
                <Link to="/contact">Contact</Link>



            </nav>
        </div>
    );
};

export default Header;