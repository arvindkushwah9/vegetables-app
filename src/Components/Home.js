import React, { Component, Fragment } from 'react';
import { View, Text, TextInput, TouchableHighlight, Image, Alert,TouchableOpacity, StyleSheet } from 'react-native';

import { Actions } from 'react-native-router-flux';
import colors from "../Styles/color";
import { getUsers } from '../actions/index';
import { logoutUser } from '../actions/auth';
import { connect } from 'react-redux';
import { showMessage, hideMessage } from "react-native-flash-message";

export class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      email   : '',
      password: '',
    };
  }

  componentDidMount() {
    // console.log('Home Page props', this.props);
  }

  logout() {
    this.props.logoutUser(this.state)
  }

  render() {
   return (
   		<View style={styles.container}>
        <TouchableHighlight style={styles.buttonContainer} >
          <Text>Welcome to Home</Text>
        </TouchableHighlight>
        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]}
         onPress={() => Actions.login()}>
          <Text style={styles.loginText}>Go To Services</Text>
        </TouchableHighlight>
        <TouchableHighlight 
         style={[styles.buttonContainer, styles.loginButton]}
         onPress={() => Actions.register()}>
          <Text style={styles.setting}>Go To Dashboard</Text>
        </TouchableHighlight>
        <TouchableHighlight
         style={[styles.buttonContainer, styles.loginButton]}
          onPress={() => this.logout() }
        >
          <Text style={styles.setting}>Logout</Text>
        </TouchableHighlight>
      </View>
   )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#3366FF",
  },
  
});

const mapStateToProps = state => {
  return {
    user: state.auth
  }
}
mapDispatchToProps = dispatch => {
  return {
    getUser: params => dispatch(getUsers(params)),
    logoutUser: params => dispatch(logoutUser(params)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)