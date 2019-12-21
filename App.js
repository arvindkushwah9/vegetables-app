import React, { Component } from 'react';
import { AppRegistry, View , ActivityIndicator} from 'react-native';
import Routes from './src/Router/Routes.js';
import SplashScreen from 'react-native-splash-screen';
import FlashMessage from "react-native-flash-message";
import { genericStyles } from './src/Styles/genericStyles'
import { ContentView } from './src/Components/ContentView'

import Menu from 'react-native-side-menu';

const SideMenu = require('react-native-side-menu');
const menu = <Menu navigator={navigator}/>;


class App extends Component {

  componentDidMount() {
    SplashScreen.hide()
  }

  render() {

      return ( 
        <View style={genericStyles.container}>     
        <Routes />
        <FlashMessage position="top" />
        <SideMenu menu={menu}>
        <ContentView/>
      </SideMenu>
       </View>
      )
   }
}
export default App
AppRegistry.registerComponent('App', () => App)