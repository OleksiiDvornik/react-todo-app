//Core
import { createUseStyles } from "react-jss";
import styles from "../../../engine/config";

const { colors, fonts } = styles;

const useStyles = createUseStyles({
    input: {
        display: 'flex',
        position: 'absolute',
        zIndex: 2,
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        '& input': {
            backgroundColor: colors.todosBackground,
            border: '3px solid rgba(17, 122, 255, 1)',
            borderRight: 'none',
            borderRadius: '6px 0 0 6px',
            outline: 'none',
            width: '100%',
            height: '100%',
            fontFamily: fonts.fontFamily,
            fontSize: 16,
            color: colors.text,
            paddingLeft: 12,
            '&::placeholder': {
                color: 'rgba(255, 255, 255, 0.7)'
            }
        }
    },
    button: {
        display: 'flex',
        height: '100%',
        alignItems: 'center',
        fontFamily: fonts.fontFamily,
        fontSize: 16,
        padding: '0 18px',
        color: colors.text,
        borderRadius: '0 6px 6px 0',
        border: 'none',
        outline: 'none',
        background: colors.buttonBackground,
        transition: 'all 0.4s',
        '&:hover': {
            cursor: 'pointer',
            background: colors.buttonBackgroundHover
        }
    }
})

export default useStyles;
