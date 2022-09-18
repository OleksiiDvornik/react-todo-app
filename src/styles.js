import { createUseStyles } from 'react-jss';
import theme from './engine/config/theme';

const { colors, fonts } = theme;

const useStyles = createUseStyles({
    '@global': {
        '*': {
            boxSizing: 'border-box',
            margin: 0
        },
        '.body': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            padding: '30px 0',
            fontFamily: fonts.fontFamily,
            fontSize: 16,
            fontWeight: 'normal',
            fontStyle: 'normal',
            color: colors.text,
            background: 'rgb(131,58,180)',
            // eslint-disable-next-line
            background: 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(69,177,252,1) 100%)'
        },
        '.container': {
            maxWidth: 576,
            minWidth: 320,
            margin: '0 auto',
            padding: '0 20px'
        },
        '@keyframes lineThrough': {
            '0%': {
                width: 0
            },
            '100%': {
                width: '75%'
            }
        },
        '@media (max-width: 576px)': {
            '.body': {
                fontSize: 14 
            }
        }
    }
})

export default useStyles;
