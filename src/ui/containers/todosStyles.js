//Core
import { createUseStyles } from "react-jss";
import styles from "../../engine/config";

const { colors } = styles;

const useStyles = createUseStyles({
    todos: {
        width: 576,
        backgroundColor: colors.todosBackground,
        borderRadius: 16,
        boxShadow: '0 0 4px 1px rgba(0, 0, 0, 0.2)',
        padding: '40px 30px 30px 30px'
    },
    list: {
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridTemplateRows: 'auto',
        rowGap: 20
    },
    text: {
        color: colors.textDisabled,
        textAlign: 'center'
    }
});

export default useStyles;
