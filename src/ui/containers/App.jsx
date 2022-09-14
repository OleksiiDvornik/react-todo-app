//Core
import { Provider } from 'react-redux';

//Engine
import { store } from '../../engine/init/store'

//Styles
import useStyles from '../../styles';

//Parts
import Todos from './Todos';

function App() {
    useStyles();
    return (
        <Provider store={store}>
            <Todos />
        </Provider>
    )
}

export default App;
