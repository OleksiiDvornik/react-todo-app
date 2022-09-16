//Core
import { createUseStyles } from 'react-jss';
import theme from '../../../engine/config/theme';

const { colors, fonts } = theme;

const useStyles = createUseStyles({
    footer: {
        width: '100%',
        height: 'auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 20
    },
    text: {
        fontSize: 14,
        color: 'rgba(255, 255, 255, 0.7)'
    },
    button: {
        display: 'block',
        border: 'none',
        fontSize: 14,
        fontFamily: fonts.fontFamily,
        color: 'rgba(255, 255, 255, 0.7)',
        backgroundColor: 'transparent',
        transition: 'all 0.3s',
        '&:hover': {
            cursor: 'pointer',
            color: colors.text,
            textDecoration: 'underline',
        }
    }
})

export default useStyles;
