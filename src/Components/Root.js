import React, { Component } from 'react';
import { View, Text, TextInput, TouchableHighlight, Image, Alert,TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Login from './Login';
import Registration from './Registration';
import Home from './Home';
import Landing from './Landing';
import { connect } from 'react-redux';
import { genericStyles } from '../Styles/genericStyles'

export class Root extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loading: false,
    }
  }

  componentWillMount() {
    // this.setState({ loading: true})
  }

  Loader() {
    if (this.state.loading) {
      return (
        <View style={[genericStyles.container, genericStyles.horizontal]}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View> 
      )
    }
  }


  render() {
    if (this.props.user.isLoggedIn) {
      return(
      <View style={genericStyles.container}>
        <Home />
        {this.Loader()}
      </View> 
      )
    }
    else {
      return(
      <View style={genericStyles.container}>
        <Landing />
        {this.Loader()}
      </View> 
      )
    }
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
    user: state.auth,
    spinner: state.auth.spinner
  }
}
mapDispatchToProps = dispatch => {
  return {
    getUser: params => dispatch(getUsers(params)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Root)