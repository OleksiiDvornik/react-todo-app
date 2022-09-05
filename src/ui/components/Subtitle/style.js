import { createUseStyles } from "react-jss";
import styles from "../../../engine/config";

const { colors } = styles;

const useStyles = createUseStyles({
    subtitle: {
        fontSize: 18,
        fontWeight: 400,
        paddingBottom: 12,
        marginBottom: 20,
        borderBottom: `2px solid ${colors.subtitleBorder}`
    }
})

export default useStyles;
