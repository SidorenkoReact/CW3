import React from "react";


interface IInitialState {
    hasError: boolean;
    errorMessage: string;
}

interface IProps {
    children: React.ReactNode
}

class ErrorBoundary extends React.Component<IProps, IInitialState> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            hasError: false,
            errorMessage: '',
        }
    }

    // попробовать по отлавливать на получении данных!


    // static getDerivedStateFromError() {
    //     return {
    //         ...this,
    //         hasError: true
    //     }
    // }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.log(error.message)
        this.setState(
            {
                hasError: true,
                errorMessage: error.message
            })
    }

    render() {
        if (this.state.hasError) {
            return (
                <h1>Возникла ошибка!:{this.state.errorMessage}</h1>
            )
        }
        return this.props.children
    }
}


export default ErrorBoundary
