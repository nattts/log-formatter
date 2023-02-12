import * as React from 'react';
import ReactDOM from "react-dom";
import "./assets/scss/index.scss";
import PaneContainer from './components/pane/PaneContainer';

class App extends React.Component {
    render() {
        return (
            <div className='main-container'>
                    <PaneContainer />
            </div>        
        )
    }
}

const root = document.getElementById("root") as HTMLElement;
ReactDOM.render(<React.StrictMode><App /></React.StrictMode>, root);