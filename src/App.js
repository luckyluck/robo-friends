import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';

import { robots } from './robots';

class App extends Component {
    constructor() {
        super();

        this.state = {
            robots,
            searchField: '',
            filteredRobotList: robots
        };
    }

    onSearchChange = event => {
        const value = event.target.value;
        const filteredRobots = this.state.robots.filter(
            robot => robot.name.toLowerCase().includes(value.toLowerCase())
        );

        this.setState({
            searchField: value,
            filteredRobotList: filteredRobots
        });
    };

    render() {
        return (
            <div className="tc">
                <h1>RoboFriends</h1>
                <SearchBox change={this.onSearchChange} value={this.state.searchField} />
                <CardList robots={this.state.filteredRobotList}/>
            </div>
        );
    }
}

export default App;