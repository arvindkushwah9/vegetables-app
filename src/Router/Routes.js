import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Home from '../Components/Home.js'
import About from '../Components/About.js'
import Settings from '../Components/Settings.js'
import Forgot from '../Components/Forgot.js'
import Login from '../Components/Login.js'
import Registration from '../Components/Registration.js'
import Root from '../Components/Root.js'
import Landing from '../Components/Landing.js'
import { Provider } from 'react-redux'
import rootReducer from '../reducers/index.js';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

let composeEnhancers = compose;

if (__DEV__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))


const Routes = () => (
    <Provider store={store}>
     <Router>
        <Scene key = "root">
          <Scene key="root" component={Root} initial = {true}  />        
          <Scene key = "home" component = {Home} title = "Home"  />
          <Scene key = "landing" component = {Landing} title = "Landing"  />
          <Scene key = "about" component = {About} title = "About" />
          <Scene key="setting" component={Settings}  />
          <Scene key="forgot" component={Forgot}  />
          <Scene key="login" component={Login}  />
          <Scene key="register" component={Registration}  />
        </Scene>
     </Router>
   </Provider>
)
export default Routes