import React, { Component } from 'react';

import CardList from '../CardList/CardList';
import SearchBox from '../SearchBox';
import ErrorBoundary from '../ErrorBoundary';
// import Scroll from '../Scroll';

import './MainPage.css';

class MainPage extends Component {
    componentDidMount() {
        this.props.onRequestRobots();
    }

    filterRobots = () => {
        return this.props.robots.filter(
            robot => robot.name.toLowerCase().includes(this.props.searchField.toLowerCase())
        );
    };

    render() {
        return (
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox change={event => this.props.onSearchChange(event)}/>
                {/*<Scroll>*/}
                <ErrorBoundary>
                    <CardList
                        robots={this.filterRobots()}
                        isPending={this.props.isPending}
                    />
                </ErrorBoundary>
                {/*</Scroll>*/}
            </div>
        );
    }
}

export default MainPage;