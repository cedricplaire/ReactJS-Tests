import React from 'react';
import { Route, Link, NavLink } from 'react-router-dom';
import SideBar from './Components/SideBar';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pageActive: false,
        };
    }
    render() {
        return (
            <div className="wrapper">
                <SideBar
                    navbarBS={false}
                    className="side-bar"
                    expanded={true}
                    vertical="lg"
                />
                <div className="body-content">
                    <h5>Bienvenue sur SoMusicShare !</h5>
                    <Route path="/" Component={Bienvenue} />
                </div>
            </div>
        );
    }
}

const Bienvenue = () => (
    <div className="welcome-div">
        <h5>Bienvenue !</h5>
    </div>
);

export default App;
