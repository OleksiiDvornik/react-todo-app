//Core
import { createUseStyles } from "react-jss";
import styles from "../../../engine/config";

const { colors, fonts } = styles;

const useStyles = createUseStyles({
    form: {
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        position: 'relative',
        marginBottom: 30
    },
    input: {
        width: '100%',
        height: 50,
        paddingLeft: 12,
        fontFamily: fonts.fontFamily,
        fontSize: 16,
        fontWeight: 400,
        color: colors.text,
        border: `3px solid ${colors.formInputBorder}`,
        outline: 'none',
        borderRadius: '6px 0 0 6px',
        boxShadow: 'inset 0 0 0 1px rgba(0, 0, 0, 0.1)',
        backgroundColor: 'transparent',
        '&:focus': {
            outline: 'none',
            boxShadow: 'inset 0 0 3px 1px rgb(209, 101, 255, 0.6)'
        },
        '&::placeholder': { 
            color: 'rgba(255, 255, 255, 0.7)'
        }
    },
    button: {
        display: 'flex',
        height: 50,
        alignItems: 'center',
        fontFamily: fonts.fontFamily,
        fontSize: 16,
        padding: '0 20px',
        color: colors.text,
        borderRadius: '0 6px 6px 0',
        border: 'none',
        outline: 'none',
        background: colors.formButtonBackground,
        transition: 'all 0.4s',
        '&:hover, &:focus': {
            cursor: 'pointer',
            background: colors.formButtonBackgroundHover
        },
        '&:disabled': {
            color: 'rgba(255, 255, 255, 0.3)',
            cursor: 'auto',
            '&:hover': {
                background: 'linear-gradient(90deg, rgb(209, 101, 255) 0%, rgb(198, 67, 255) 100%)'
            }
        }
    }
})

export default useStyles;
