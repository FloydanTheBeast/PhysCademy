import React from 'react';
import injectStyles from 'react-jss';
import styles from './AppLogoStyles';

const Logo = ({ classes }) => {
    return (
        <h1 className={classes.Logo}>PhysCademy</h1>
    );
};

export default injectStyles(styles)(Logo);