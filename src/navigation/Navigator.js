/* global require */
import React, { Component } from "react";
import Matrix from "../components/Matrix";
import {
    createDrawerNavigator,
    createAppContainer,
    createStackNavigator
  } from "react-navigation";

const HomeStack = createStackNavigator(
    {
        Matrix: { screen: Matrix }
    },
    { headerMode: "none" }
)

const AppContainer = createAppContainer(HomeStack);

export default AppContainer;
