import React from "react";
import './UsersProperty.css';

const UsersProperty = props => {
    return(
        <li className="user-property">
            <div className="user-property__content">
                <div className="=user-property__image">
                    <img src={props.image} alt={props.name}/>
                </div>
            </div>
        </li>
    )
};

export default UsersProperty;    