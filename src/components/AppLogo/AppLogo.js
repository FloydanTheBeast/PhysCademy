import React from 'react';
import injectStyles from 'react-jss';
import InlineSVG from 'svg-inline-react';
import styles from './AppLogoStyles';

const Logo = (props) => {
    const { classes } = props

    switch(props.fixed) {
        case(true):
            return (
                <div className={classes.Header}>
                    <InlineSVG className={`${classes.Logo}`} element='div' src={require('../../../assets/Images/Logo.svg')} />
                </div>
            )
        default:
            return (
                <InlineSVG className={classes.Logo} element='div' src={require('../../../assets/Images/Logo.svg')} />
            )
    }
};

export default injectStyles(styles)(Logo);