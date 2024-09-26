import PropTypes from "prop-types";
import { Link } from "react-router-dom";


const Use = ({ user }) => {
    const { id, name, email, phone } = user;
    const userStyle = {
        border: '2px solid red',
        padding: '10px',
        margin: '10px',
        borderRadius: '10px'
    };
    return (
        <div style={userStyle}>
            <h2>  Name:{name}  </h2>
            <h4> Email: {email}</h4>
            <p> Phone: {phone}</p>
            <Link to={`/user/${id}`}> Show Details</Link>
            <Link to={`/user/${id}`}>
                <button>Click me</button>
            </Link>


        </div >
    );
};


Use.propTypes = {
    user: PropTypes.object.isRequired
}
export default Use;