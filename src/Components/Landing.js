import React, { Component, Fragment } from 'react';
import { View, Text, TextInput, TouchableHighlight, Image, Alert,TouchableOpacity, StyleSheet } from 'react-native';

import { Actions } from 'react-native-router-flux';
import colors from "../Styles/color";
import { getUsers } from '../actions/index';
import { connect } from 'react-redux';
import { showMessage, hideMessage } from "react-native-flash-message";

export class Landing extends Component {
  constructor(props){
    super(props);
    this.state = {
      email   : '',
      password: '',
    };
  }

  componentDidMount() {
    // console.log('Landing Page props', this.props);
  }

  render() {
   return (
   		<View style={styles.container}>
        <TouchableHighlight style={styles.buttonContainer} >
          <Text>Welcome</Text>
        </TouchableHighlight>
        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]}
         onPress={() => Actions.login()}>
          <Text style={styles.loginText}>Go To Login Page</Text>
        </TouchableHighlight>
        <TouchableHighlight 
         style={[styles.buttonContainer, styles.loginButton]}
         onPress={() => Actions.register()}>
          <Text style={styles.setting}>Go To Registration Page</Text>
        </TouchableHighlight>
        <TouchableHighlight
         style={[styles.buttonContainer, styles.loginButton]}
          onPress={() => {
            showMessage({
              message: "Hello Hello",
              type: "info",
            });
          }}
        >
          <Text style={styles.setting}>Click me</Text>
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
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Landing)