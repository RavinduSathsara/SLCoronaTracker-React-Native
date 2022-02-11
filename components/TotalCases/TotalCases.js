import React from 'react';

import styles from './styles';

import {Text, View} from 'react-native';

const TotalCases = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Total Cases {props.local_total_cases} </Text>
    </View>
  );
};

export default TotalCases;
