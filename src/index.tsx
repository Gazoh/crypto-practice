import ReactDOM from 'react-dom';
import ReduxThunk from 'redux-thunk';
import History from './helpers/History';
import globalReducer from './reducers/Global';
import CryptoClient from './CryptoClient/CryptoClient';
import './index.scss';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension' // DISABLE THIS IN PRODUCTION MODE
import { Router } from 'react-router-dom';

const middleware = [ReduxThunk];

const allReducers = combineReducers({
    globalReducer: globalReducer
});

const store = createStore(allReducers, composeWithDevTools(applyMiddleware(...middleware)));

ReactDOM.render(
    <Provider store={store}>
        <Router history={History}>
            <CryptoClient />
        </Router>
    </Provider>
    , document.getElementById('root'));