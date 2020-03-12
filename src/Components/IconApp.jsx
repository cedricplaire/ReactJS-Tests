import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IconApp = ({ icon, color, className, disabled }) => {
    return <FontAwesomeIcon icon={icon} />;
};

IconApp.propTypes = {
    icon: PropTypes.object,
    disabled: PropTypes.bool,
    color: PropTypes.string,
    className: PropTypes.string,
};

export default IconApp;
