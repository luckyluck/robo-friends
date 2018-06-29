import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestRobots, setSearchField } from '../store/actions';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ErrorBoundary from '../components/ErrorBoundary';
// import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
    componentDidMount() {
        this.props.onRequestRobots();
    }

    render() {
        const searchField = this.props.searchField.toLowerCase();
        const filteredRobots = this.props.robots.filter(
            robot => robot.name.toLowerCase().includes(searchField)
        );

        if (this.props.robots.length === 0) {
            return (
                <h1 className="f1 tc">Loading...</h1>
            );
        } else {
            return (
                <div className="tc">
                    <h1 className="f1">RoboFriends</h1>
                    <SearchBox change={event => this.props.onSearchChange(event)}/>
                    {/*<Scroll>*/}
                    <ErrorBoundary>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundary>
                    {/*</Scroll>*/}
                </div>
            );
        }
    }
}

const mapStateToProps = state => ({
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
});

const mapDispatchToProps = dispatch => ({
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => requestRobots(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);