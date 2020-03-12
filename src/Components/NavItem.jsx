import React from 'react';
import classNames from 'classnames';

class NavItem extends React.Component {
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

    renderLink() {
        this.props.button ? (
            <button clasName="btn-toggle"></button>
        ) : (
            <a className={classes}></a>
        );
    }

    render() {
        const classes = classNames(
            className,
            'nav-link',
            toogle && 'nav-toggle',
        );
        return <li>{renderLink}</li>;
    }
}

export default NavItem;
