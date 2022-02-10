import React from 'react';

import styles from './styles';

import {Text, View} from 'react-native';

const LocalDeaths = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.num}>{props.local_deaths}</Text>
      <Text style={styles.txt}>Total deaths </Text>
    </View>
  );
};

export default LocalDeaths;
