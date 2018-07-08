import * as React from 'react';

import CardList from '../CardList/CardList';
import ErrorBoundary from '../ErrorBoundary';
import SearchBox from '../SearchBox';

import './MainPage.css';

import { IAppProps } from '../../interfaces/app.interface';

class MainPage extends React.Component<IAppProps, any> {
    public componentDidMount() {
        this.props.onRequestRobots();
    }

    public filterRobots = () => {
        return this.props.robots.filter(
            robot => robot.name.toLowerCase().includes(this.props.searchField.toLowerCase())
        );
    };

    public render() {
        return (
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox change={this.props.onSearchChange}/>
                <ErrorBoundary>
                    <CardList
                        robots={this.filterRobots()}
                        isPending={this.props.isPending}
                    />
                </ErrorBoundary>
            </div>
        );
    }
}

export default MainPage;