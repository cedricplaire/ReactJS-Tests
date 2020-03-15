import React from 'react';
import NavBar from './NavBar';
import { faSearch, faHome, faCode } from '@fortawesome/free-solid-svg-icons';

class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
        };
        this.toggleExpanded = this.toggleExpanded.bind(this);
    }

    toggleExpanded(event) {
        this.setState({ expanded: !this.state.expanded });
    }

    render() {
        const links = [
            {
                id: 1,
                content: 'Home',
                url: '/',
                exact: true,
                icon: faHome,
            },
            {
                id: 2,
                content: 'Utilisateurs',
                url: '/users',
                exact: false,
                icon: faSearch,
            },
            {
                id: 3,
                content: 'Recherche',
                url: '/search',
                exact: false,
                icon: faCode,
            },
        ];
        return (
            <NavBar
                expanded={this.state.expanded}
                className={this.props.className}
                navbarBS={this.props.navbarBS}
                vertical={this.props.vertical}
                onClick={this.toggleExpanded}
                navlinks={links}
            />
        );
    }
}

export default SideBar;
