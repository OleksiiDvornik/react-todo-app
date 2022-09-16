//Styles
import useStyles from './styles';

function Subtitle({ children }) {
    const classes = useStyles();
    return <h2 className={classes.subtitle}>{children}</h2>
}

export default Subtitle;
