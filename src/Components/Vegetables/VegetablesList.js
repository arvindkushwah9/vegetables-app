import React, { Component, Fragment } from 'react';
import { View, Text, TextInput, TouchableHighlight,SafeAreaView, FlatList, Image, Alert,TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Home from '../Home';
import Root from '../Root';
import { connect } from 'react-redux';
import { genericStyles } from '../../Styles/genericStyles'
import { getVegetables } from '../../actions/index';

const CustomRow = ({ title, description, image }) => (
    <View style={styles.container}>
        <Image source={{ uri: image }} style={styles.photo} />
        <View style={styles.container_text}>
            <Text style={styles.title}>
                {title}
            </Text>
            <Text style={styles.description}>
                {description}
            </Text>
        </View>

    </View>
);



const CustomListview = ({ itemList }) => (
    <View style={genericStyles.container}>
        <FlatList
                data={itemList}
                renderItem={({ item }) => <CustomRow
                    title={item.title}
                    description={item.description}
                    image={item.image}
                />}
            />

    </View>
);



export class VegetablesList extends Component {

	constructor(props){
    super(props);
    this.state = {
      vegetables   : [],   
    };   
  }

	componentDidMount() {
    this.props.getVegetables();
  }

  render() {
    console.log('getVegetables', this.props);
    console.log('this.state', this.state);



    return (
       <View style={genericStyles.container}>
          <CustomListview
            itemList={this.props.vegetables}
          />
        </View>
    )
  }
};


const styles = StyleSheet.create({
 container: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: 6,
        marginRight: 6,
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 5,
        backgroundColor: '#FFF',
        elevation: 2,
        height: 100,

    },
    title: {
        fontSize: 16,
        color: '#000',
    },
    container_text: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 12,
        justifyContent: 'center',
    },
    description: {
        fontSize: 11,
        fontStyle: 'italic',
    },
    photo: {
        height: 50,
        width: 50,
        marginLeft: 6,
        marginRight: 6,
    },
});


const mapStateToProps = state => {
  return {
    storeObject: state,
    vegetables: state.vegetables.data.data.vegetables,
  }
}
mapDispatchToProps = dispatch => {
  return {
    getVegetables: params => dispatch(getVegetables(params)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(VegetablesList)