import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';

import { robots } from '../robots';

class App extends Component {
    constructor() {
        super();

        this.state = {
            robots,
            filteredRobotList: robots
        };
    }

    onSearchChange = event => {
        const value = event.target.value;
        const filteredRobots = this.state.robots.filter(
            robot => robot.name.toLowerCase().includes(value.toLowerCase())
        );

        this.setState({
            filteredRobotList: filteredRobots
        });
    };

    render() {
        return (
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox change={this.onSearchChange} />
                <CardList robots={this.state.filteredRobotList}/>
            </div>
        );
    }
}

export default App;