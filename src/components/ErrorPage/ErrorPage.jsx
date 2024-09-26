import { useRouteError, Link } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);

    return (
        <div>
            <h2>Opps!!</h2>
            <p>{error.statusText || error.message};
            </p>
            {
                error.status === 404 && <div>
                    <h2>Page not found</h2>
                    <p>Go back where you from</p>
                    <Link to="/">   <button> Home </button></Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;