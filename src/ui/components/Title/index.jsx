//Core
import React from "react";
import useStyles from "./style";

function Title({ children }) {
    const classes = useStyles();
    return <h1 className={classes.title}>{children}</h1>
}

export default Title; 
