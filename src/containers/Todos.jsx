//Core
import React from "react";

//Parts
import ErrorBoundary from './ErrorBoundary';
import Title from "../components/Title";

function Todos() {
    return (
        <ErrorBoundary>
            <div className="todos">
                <Title className="title todos__title">Какие планы на сегодня?</Title>
            </div>
        </ErrorBoundary>
    )
}

export default Todos;
