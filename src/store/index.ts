import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import rootReducer from './reducers';

export default createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
);
