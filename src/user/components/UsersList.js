import React from "react";
import './UserList.css';
import UsersProperty from "./UserProperty";

const UsersList = props => {
    if (props.items.length === 0){
        return (
            <div className="center">
                <h2>No users found.</h2>
            </div>
        );
    }

    return <ul>
        {props.items.map(user =>(
            <UsersProperty
            key={user.id}
            id={user.id}
            image={user.image}
            name={user.name}
            propertyCount={user.properties}
            />
        ))}

    </ul>;
};

export default UsersList;