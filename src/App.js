import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SideBar from './Components/SideBar';
import './App.css';
import HomePage from './Pages/HomePage';
import UserPage from './Pages/UserPage';
import SearchPage from './Pages/SearchPage';

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
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/users" component={UserPage} />
                        <Route path="/search" component={SearchPage} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;
