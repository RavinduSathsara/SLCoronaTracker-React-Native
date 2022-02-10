import React from 'react';

import styles from './styles';

import {Text, View} from 'react-native';

const NewDeaths = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.num}>{props.local_new_deaths}</Text>
      <Text style={styles.txt}>New deaths </Text>
    </View>
  );
};

export default NewDeaths;
