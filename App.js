import React, { Component } from 'react'
import { Text,View,Image } from 'react-native'

import {selectPage,infoPage,configPage,sobrePage} from './src/pages';
import {createAppContainer,createDrawerNavigator, createStackNavigator} from 'react-navigation';
import { TouchableOpacity } from 'react-native-gesture-handler';
//import { Icon } from 'react-native-elements'

class NavigationDrawerStructure extends Component{
  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return(
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          <Image
            source={require('./src/icons/menu.png')}
            style={{width:35, height:35, marginLeft: 10}}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const SelectStackNavigator = createStackNavigator({
  Home: {
    screen: selectPage,
    navigationOptions: ({navigation}) => ({
      title: 'Seleção Parlamentar',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation}/>,
      headerStyle: {
        backgroudColor: 'blue',
      },
      headerTintColor: 'black',
    }),
  },
})

const InfoStackNavigator = createStackNavigator({
  Home: {
    screen: infoPage,
    navigationOptions: ({navigation}) => ({
      title: 'Info Parlamentar',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation}/>,
      headerStyle: {
        backgroudColor: 'blue',
      },
      headerTintColor: 'black',
    }),
  },
})

const ConfigStackNavigator = createStackNavigator({
  Home: {
    screen: configPage,
    navigationOptions: ({navigation}) => ({
      title: 'Configurações',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation}/>,
      headerStyle: {
        backgroudColor: 'blue',
      },
      headerTintColor: 'black',
    }),
  },
})

const SobreStackNavigator = createStackNavigator({
  Home: {
    screen: sobrePage,
    navigationOptions: ({navigation}) => ({
      title: 'Sobre',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation}/>,
      headerStyle: {
        backgroudColor: 'blue',
      },
      headrTintColor: 'white',
    }),
  },
})

const myDrawerNavigator = createDrawerNavigator (
  {
    HomeSelect: {
      screen: SelectStackNavigator,
      navigationOptions: {
        drawerLabel: 'Parlamentares'
      }
    },
    HomeInfo:  {
      screen: InfoStackNavigator,
      navigationOptions: {
        drawerLabel: 'Informativos'
      }
    },
    HomeConfig: {
      screen: ConfigStackNavigator,
      navigationOptions: {
        drawerLabel: 'Configurações'
      }
    },
    HomeSobre: {
      screen: SobreStackNavigator,
      navigationOptions: {
        drawerLabel: 'Sobre'
      }
    }
  }
);

export default createAppContainer(myDrawerNavigator);

