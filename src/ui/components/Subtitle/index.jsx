//Core
import React from "react";

//Styles
import useStyles from "./style";

function Subtitle({ children }) {
    const classes = useStyles();
    return <h2 className={classes.subtitle}>{children}</h2>
}

export default Subtitle;
