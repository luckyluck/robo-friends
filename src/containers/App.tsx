import * as React from 'react';
import { connect } from 'react-redux';
import { requestRobots, setSearchField } from '../store/actions';

import MainPage from '../components/MainPage/MainPage';
import { IAppProps } from '../interfaces/app.interface';

class App extends React.Component<IAppProps, any> {
    public render() {
        return <MainPage {...this.props} />;
    }
}

const mapStateToProps = (state: any) => ({
    error: state.requestRobots.error,
    isPending: state.requestRobots.isPending,
    robots: state.requestRobots.robots,
    searchField: state.searchRobots.searchField
});

const mapDispatchToProps = (dispatch: (param: any) => void) => ({
    onRequestRobots: () => requestRobots(dispatch),
    onSearchChange: (event: any) => dispatch(setSearchField(event.target.value))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);