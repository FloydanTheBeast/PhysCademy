import React from 'react'
import injectStyles from 'react-jss'
import styles from './HomePageStyles'

const HomePage = (props) => {
    const { classes } = props

    return (
        <React.Fragment>
        {/* <AppLogo fixed/> */}
        <div className={classes.HomePage}>
            <h1 className={classes.AppName}>PhysCademy</h1><span> - это приложение, позволяющее любому желающему ближе
            познакомиться с миром физики, изучая теорию, узнавая о жизни учёных
            и подбирая книги, которые заставят вас влюбиться в эту науку.</span>
        </div>
        </React.Fragment>
    )
}

export default injectStyles(styles)(HomePage)