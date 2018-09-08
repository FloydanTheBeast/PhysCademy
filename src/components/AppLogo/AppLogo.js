import React from 'react';
import injectStyles from 'react-jss';
import InlineSVG from 'svg-inline-react';
import styles from './AppLogoStyles';

const Logo = ({ classes }) => {
    return (
        // <div >
            <InlineSVG className={classes.Logo} element='div' src={require('../../../assets/Images/Logo.svg')} />
        // </div>
    );
};

export default injectStyles(styles)(Logo);