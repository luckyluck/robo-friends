import React from 'react';

import Card from '../Card/Card';

import './CardList.css';

export const CardList = ({ robots, isPending }) => {
    if (isPending) {
        return (
            <h1 className="f1 tc">Loading...</h1>
        );
    } else {
        return (
            <div className="CardList">
                {robots.map(
                    robot => <Card
                        key={robot.id}
                        id={robot.id}
                        name={robot.name}
                        email={robot.email}
                    />
                )}
            </div>
        );
    }
};

export default CardList;