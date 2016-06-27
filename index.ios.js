/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  NavigatorIOS,
  View
} from 'react-native';

import Main from './app/Components/Main';

class GithubNoteTaker extends Component {

  render() {
    console.log(Main);
    return (
      <NavigatorIOS style={styles.container}
        initialRoute = {{
          title: "Github Notetaker",
          component: Main
        }}
        tintColor="#00ffff"
        >

      </NavigatorIOS>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

AppRegistry.registerComponent('GithubNoteTaker', () => GithubNoteTaker);
