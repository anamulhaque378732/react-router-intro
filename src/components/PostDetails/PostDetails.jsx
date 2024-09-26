import { useLoaderData } from "react-router-dom";


const PostDetails = () => {
    const post = useLoaderData();
    const { body, title,id } = post;
    

    return (
        <div>
            <h2>Post Id: {id}</h2>
            <h1> Title : {title}</h1>
            <p>Post Details: {body} </p>
        </div>
    );
};

export default PostDetails;