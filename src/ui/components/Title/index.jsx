//Styles
import useStyles from './styles';

function Title({ children }) {
    const classes = useStyles();
    return <h1 className={classes.title}>{children}</h1>
}

export default Title; 
