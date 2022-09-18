import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    title: {
        fontSize: 24,
        fontWeight: 400,
        textAlign: 'center',
        marginBottom: 32
    },
    '@media (max-width: 576px)': {
        title: {
            fontSize: 20, 
            marginBottom: 24
        }
    }
})

export default useStyles;
