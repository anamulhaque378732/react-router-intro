import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const PostDetails = () => {
    const post = useLoaderData();
    const { body, title, id } = post;

    const navigate = useNavigate();
    const { PostId } = useParams();
    console.log(PostId);




    const handleGoBack = () => {
        navigate(-1)
    }

    return (
        <div>
            <h2>Post Id: {id}</h2>
            <h1> Title : {title}</h1>
            <p>Post Details: {body} </p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;