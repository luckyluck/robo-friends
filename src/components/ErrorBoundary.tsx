import * as React from 'react';

interface IErrorBoundaryState {
    hasError: boolean
}

class ErrorBoundary extends React.Component<any, IErrorBoundaryState> {
    public state = {
        hasError: false
    };

    public componentDidCatch(error: Error, info: React.ErrorInfo) {
        this.setState({ hasError: true });
    }

    public render() {
        if (this.state.hasError) {
            return <h1>Oooop. That is not good</h1>;
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary;