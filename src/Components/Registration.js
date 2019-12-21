import React, { Component, Fragment } from 'react';
import { View, Text, TextInput, TouchableHighlight, Image, Alert,TouchableOpacity, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Forgot from './Forgot';
import Login from './Login';
import axios from 'axios';
import Home from './Home';

export class Registration extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      password_confirmation: '',
    };
    this.registerUser = this.registerUser.bind(this);
    this.onRegistrationFail = this.onRegistrationFail.bind(this);
  }

  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
  }

  registerUser() {
    const { email, password, password_confirmation } = this.state;
    const headers = {
      'Content-Type': 'application/json'
    }
    var user = {user: {email: email, password: password, password_confirmation: password_confirmation}}
    // this.setState({ error: '', loading: true });
    axios.post("http://192.168.1.8:3000/api/v1/sign_up", user,
      {
        headers: headers
    })
    .then((response) => {
      deviceStorage.saveKey("id_token", response.data.jwt);
      this.props.newJWT(response.data.jwt);
    })
    .catch((error) => {
      console.log(error);
      this.onRegistrationFail();
    });
  }

  onRegistrationFail() {
    this.setState({
      error: 'Registration Failed',
      loading: false
    });
  }

  componentDidMount() {
     console.log('Registration*********************');
     // Actions.forgot()
  }

  render() {
    const { email, password, password_confirmation, error, loading } = this.state;
    const { form, section, errorTextStyle } = styles;
    return (
     <View style={styles.container}>
        <TouchableHighlight style={styles.buttonContainer} >
            <Text>Registration</Text>
        </TouchableHighlight>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/nolan/64/000000/important-mail.png'}}/>
          <TextInput style={styles.inputs}
              placeholder="Email"
              value={email}
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({email})}/>
        </View>
        
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/nolan/64/000000/forgot-password.png'}}/>
          <TextInput style={styles.inputs}
              placeholder="Password"
              value={password}
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/nolan/64/000000/forgot-password.png'}}/>
          <TextInput style={styles.inputs}
              placeholder="Password Confirmation"
              value={password_confirmation}
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password_confirmation) => this.setState({password_confirmation})}/>
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={this.registerUser}>
          <Text style={styles.loginText}>Register</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('restore_password')}>
            <Text>Forgot your password?</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={() => Actions.home()}>
            <Text>Go to Home Page</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={() => Actions.login()}>
            <Text>Login</Text>
        </TouchableHighlight>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#DCDCDC',
    backgroundColor: '#006699',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
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
    backgroundColor: "#FF4DFF",
  },
  loginText: {
    color: 'white',
  }
});

export default Registration;