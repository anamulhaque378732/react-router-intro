import { useLoaderData } from "react-router-dom";
import Use from "../Use/Use";
import './Users.css'
const Users = () => {
    const users = useLoaderData()
    // state---> data
    // state ---> loader
    // use effect 
    // fetch ---> state set


    return (
        <div>
            <h2>User : {users.length}</h2>
            <h4> Users </h4>
            <p>Fantastic user</p>

            <div className="gaja">
                {
                    users.map(user => <Use key={user.id} user=
                        {user}></Use>)
                }
            </div>
        </div>
    );
};

export default Users;