import React, { Component } from 'react';
import { AppRegistry, View , ActivityIndicator} from 'react-native';
import Routes from './src/Router/Routes.js';
import SplashScreen from 'react-native-splash-screen';
import FlashMessage from "react-native-flash-message";
import { genericStyles } from './src/Styles/genericStyles'


class App extends Component {

  componentDidMount() {
    SplashScreen.hide()
  }

  render() {

      return ( 
        <View style={genericStyles.container}>     
        <Routes />
        <FlashMessage position="top" />
        
       </View>
      )
   }
}
export default App
AppRegistry.registerComponent('App', () => App)