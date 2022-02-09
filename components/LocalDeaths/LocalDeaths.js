import React from 'react';

import styles from './style';

import {Text, View} from 'react-native';

const LocalDeaths = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.num}>{props.local_deaths}</Text>
      <Text style={styles.txt}>local deaths </Text>
    </View>
  );
};

export default LocalDeaths;
