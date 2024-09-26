import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
    const { id, title } = post;
    const navigate = useNavigate()


    const handleShowDetails = () => {
        navigate(`/post/${id}`)
    }

    const postStyle = {
        border: '3px solid green',
        padding: '10px',
        margin: '10px',
        borderRadius: '10px'
    };
    return (
        <div style={postStyle}>
            <h3>Post of id : {id}</h3>
            <h4> Title: {title}</h4>
            <Link to={`/post/${id}`}> <button> Post Details</button></Link>
            <button onClick={handleShowDetails}>Click to see details</button>



        </div>
    );
};
Post.propTypes = {
    post: PropTypes.object.isRequired
}
export default Post;