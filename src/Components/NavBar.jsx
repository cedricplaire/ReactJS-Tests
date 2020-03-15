import React from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        if (this.props.disabled) {
            event.preventDefault();
            return;
        }
        if (this.props.href === '#') {
            event.preventDefault();
        }

        if (this.props.onClick) {
            this.props.onClick(event);
        }
    }

    render() {
        const {
            expanded,
            vertical,
            horizontal,
            navbarBS,
            className,
            children,
            navlinks,
            onClick,
            ...attrs
        } = this.props;

        let verticalClass;

        if (vertical === true || vertical === 'xs') {
            verticalClass = 'flex-column';
        } else if (vertical === false) {
            verticalClass = false;
        } else if (typeof vertical === 'string') {
            verticalClass = `flex-${vertical}-column`;
        }

        const classes = classNames(
            className,
            navbarBS ? 'navbar-nav' : 'nav',
            expanded && 'expanded',
            horizontal && `justify-content-${horizontal}`,
            verticalClass,
        );

        return (
            <nav {...attrs} className={classes}>
                <li className="nav-item toogle-nav">
                    <button onClick={onClick} className="nav-link">
                        <FontAwesomeIcon icon={faBars} />
                        {!expanded && 'Fermer'}
                    </button>
                </li>
                {navlinks.map(item => (
                    <li className="nav-item" key={item.id}>
                        <NavLink
                            to={item.url}
                            className="nav-link"
                            exact={item.exact}
                        >
                            <FontAwesomeIcon icon={item.icon} />
                            {!expanded && item.content}
                        </NavLink>
                    </li>
                ))}
            </nav>
        );
    }
}

export default NavBar;
