import * as React from 'react';

import Card from '../Card/Card';

import './CardList.css';

interface ICardListProps {
    robots: Array<{
        id: string,
        name: string,
        email: string
    }>,
    isPending: boolean
}

export const CardList = ({ robots, isPending }: ICardListProps) => {
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