import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createStore,compose,applyMiddleware} from 'redux';
import classes from './App.css'

const App = () => {

   // const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  //  const store = createStore(reducer,composeEnhancers(applyMiddleware(thunk))); Use your own reducers here

        return (
            <div className="container">
                <h1>Hi There!</h1>
            </div>
        ) 
}



ReactDOM.render(<App />, document.getElementById("root"));

if (module.hot) {
    module.hot.accept();
}