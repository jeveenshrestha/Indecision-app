import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import './styles/styles.css';

const App = () => {
    return (
        <div>
            <IndecisionApp />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('app'));
