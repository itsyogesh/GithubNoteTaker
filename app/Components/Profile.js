import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';

import Badge from './Badge';
import Seperator from './Helpers/Seperator';

class Profile extends Component {
  getRowTitle(user, item){
      item = (item === 'public_repos') ? item.replace('_', ' ') : item;
      return item[0] ? item[0].toUpperCase() + item.slice(1) : item;
  }

  render(){
    var userInfo = this.props.userInfo;
    var topicArr = ['company', 'location', 'followers', 'following',
                    'email', 'bio', 'public_repos'];
    var list = topicArr.map((item, index) => {
      if(![userInfo[item]]){
        return <View key={index} />
      }
      else {
        return (
          <View key={index}>
            <View style={styles.rowContainer}>
              <Text style={styles.rowTitle}> {this.getRowTitle(userInfo, item)} </Text>
              <Text style={styles.rowContent}> {userInfo[item]} </Text>
            </View>
            <Seperator />
          </View>
        )
      }
    })
    return (
      <ScrollView style={styles.container}>
        <Badge userInfo={this.props.userInfo} />
        {list}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  rowContainer: {
    padding: 10
  },
  rowTitle: {
    color: '#48BBEC'
  },
  rowContent: {
    fontSize: 19
  }
})

module.exports = Profile;
