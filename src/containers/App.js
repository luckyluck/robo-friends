import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestRobots, setSearchField } from '../store/actions';

import CardList from '../components/CardList/CardList';
import SearchBox from '../components/SearchBox';
import ErrorBoundary from '../components/ErrorBoundary';
// import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
    componentDidMount() {
        this.props.onRequestRobots();
    }

    render() {
        return (
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox change={event => this.props.onSearchChange(event)}/>
                {/*<Scroll>*/}
                <ErrorBoundary>
                    <CardList />
                </ErrorBoundary>
                {/*</Scroll>*/}
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => requestRobots(dispatch)
});

export default connect(null, mapDispatchToProps)(App);