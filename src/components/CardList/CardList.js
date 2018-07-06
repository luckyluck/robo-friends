import React from 'react';
import { connect } from 'react-redux';

import Card from '../Card/Card';

import './CardList.css';

export const CardList = ({ searchField, robots }) => {
    const filteredRobots = robots.filter(
        robot => robot.name.toLowerCase().includes(searchField)
    );

    if (robots.length === 0) {
        return (
            <h1 className="f1 tc">Loading...</h1>
        );
    } else {
        return (
            <div className="CardList">
                {filteredRobots.map(
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

const mapStateToProps = state => ({
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
});

export default connect(mapStateToProps, null)(CardList);