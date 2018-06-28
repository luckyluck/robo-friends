import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';

class App extends Component {
    constructor() {
        super();

        this.state = {
            robots: [],
            filteredRobotList: []
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                this.setState({
                    robots: users,
                    filteredRobotList: users
                });
            })
            .catch(error => {
                console.log(error);
            });
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
        if (this.state.robots.length === 0) {
            return (
                <h1 className="f1 tc">Loading...</h1>
            );
        } else {
            return (
                <div className="tc">
                    <h1 className="f1">RoboFriends</h1>
                    <SearchBox change={this.onSearchChange}/>
                    <CardList robots={this.state.filteredRobotList}/>
                </div>
            );
        }
    }
}

export default App;