//Core
import { createUseStyles } from 'react-jss';
import theme from '../../../engine/theme';

//Assets
import editIcon from '../../_helpers/assets/img/edit-white.png';
import editIconHover from '../../_helpers/assets/img/edit.png';
import removeIcon from '../../_helpers/assets/img/remove-white.png';
import removeIconHover from '../../_helpers/assets/img/remove.png';

const { colors } = theme;

const useStyles = createUseStyles({
    item: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: 20,
        color: '#ffffff',
        background: colors.itemBackground,
        borderRadius: 6,
        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
        position: 'relative',
        '&.checked': {
            color: colors.textDisabled,
            '&::after': {
                content: '""',
                display: 'block',
                width: '75%',
                height: 2,
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                position: 'absolute',
                top: '50%',
                left: 40,
                animation: 'lineThrough .2s linear'
            }
        }
    },
    label: {
        display: 'flex',
        minWidth: '85%',
        position: 'relative'
    },
    description: {
        display: 'block',
        margin: [0, 'auto', 0, 10],
        lineHeight: 1
    },
    button: {
        display: 'block',
        minWidth: 20,
        minHeight: 20,
        border: 'none',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundColor: 'transparent',
        transition: 'all 0.3s',
        padding: 0,
        flexShrink: 0
    },
    editButton: {
        composes: '$button',
        backgroundImage: `url(${editIcon})`,
        '&:hover': {
            cursor: 'pointer',
            backgroundImage:`url(${editIconHover})`
        }
    },
    deleteButton: {
        composes: '$button',
        backgroundImage: `url(${removeIcon})`,
        '&:hover': {
            cursor: 'pointer',
            backgroundImage:`url(${removeIconHover})`
        }
    }
})

export default useStyles;
