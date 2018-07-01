import React from 'react';

import './Card.css';

const Card = ({ id, name, email }) => {
    return (
        <div className="Card tc bg-light-green dib br3 ma2 grow bw2 shadow-5 pv1 ph3">
            <img src={`https://robohash.org/${id}?size=200x200`} alt={name}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
};

export default Card;