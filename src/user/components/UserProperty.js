import React from "react";
import './UsersProperty.css';

const UsersProperty = props => {
    return(
        <li className="user-property">
            <div className="user-property__content">
                <div className="=user-property__image">
                    <img src={props.image} alt={props.name}/>
                </div>
                <div className="user_property__info">
                    <h2>{props.StreetAddress}</h2>
                    <h3>{props.City}</h3>
                    <h3>{props.StateOrProvince}</h3>
                    <h3>{props.PostalCode}</h3>
                    <h3>{props.ListPrice}</h3>
                </div>
            </div>
        </li>
    );
};

export default UsersProperty;