import React from 'react';
import { TabNavigator } from 'react-navigation';
import RandomMain from './components/RandomMain';
import NewFoodForm from './components/NewFoodForm';
import FoodCamera from './components/Camera';

const tabBarConfigurations = {
  tabBarOptions : {
    style : {
      backgroundColor : '#ffff96',
    },
    labelStyle : {
      color : '#000000'
    },
    indicatorStyle : {
      backgroundColor : '#c7a300',
      height : 5
    }
  }
}


const Router = TabNavigator({
  Main : { screen : RandomMain },
  NewFood : { screen : NewFoodForm },
  Camera : { screen : FoodCamera }
}, tabBarConfigurations);


export default Router;
