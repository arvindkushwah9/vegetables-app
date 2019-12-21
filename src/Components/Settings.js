import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux'
import Forgot from './Forgot';


export class Settings extends Component {

	componentDidMount() {
     console.log('IM Settings');
     Actions.forgot()
  }

  render() {
    return (
      <View>
        <Text>This is the Settings screen</Text>
        <TouchableOpacity 
              onPress={() => Actions.home()}
          >
              <Text style={{ fontSize: 16 }}>Go to home screen</Text>
          </TouchableOpacity>
      </View>
    )
  }
};

export default Settings;