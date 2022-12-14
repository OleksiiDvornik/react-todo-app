import { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {hasError: false};
    }

    static getDerivedStateFromError(error) {
        return {hasError: true};
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
    }

    render() {
        const {hasError} = this.state;
        const {children} = this.props;
        return hasError
            ? <p className="error">Упс! Что-то пошло не так. Попробуйте обновить страницу.</p>
            : children;
    }
}

export default ErrorBoundary;
