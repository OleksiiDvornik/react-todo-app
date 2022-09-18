//Core
import { createUseStyles } from 'react-jss';

//Assets
import removeIcon from '../../../_helpers/assets/img/remove-white.png';

const useStyles = createUseStyles({
    label: {
        width: '100%',
        position: 'relative',
        marginBottom: 24
    },
    error: {
        position: 'absolute',
        bottom: -16,
        display: 'flex',
        width: '100%',
        fontSize: 12,
        color: 'rgba(255, 255, 255, 0.3)'
    },
    button: {
        isplay: 'block',
        minWidth: 16,
        minHeight: 16,
        border: 'none',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundColor: 'transparent',
        transition: 'all 0.3s',
        padding: 0,
        position: 'absolute',
        top: '50%',
        right: 12,
        transform: 'translateY(-50%)',
        backgroundImage: `url(${removeIcon})`,
        '&:hover': {
            cursor: 'pointer'
        }
    },
    '@media (max-width: 576px)': {
        label: {
            marginBottom: 16
        }
    }
});

export default useStyles;
