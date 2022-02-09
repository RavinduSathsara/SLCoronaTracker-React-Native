import React, {useState, useEffect} from 'react';

import axios from 'axios';
import styles from './utils/style';
import data from './utils/data';

import {Text, View} from 'react-native';
import Header from './components/Header/Header';
import LocalDeaths from './components/LocalDeaths/LocalDeaths';

const baseUrl = 'https://www.hpb.health.gov.lk/api/get-current-statistical';

const App = () => {
  const [items, setItems] = useState(data);

  async function callApi() {
    axios.get(baseUrl).then(response => {
      setItems(response.data);
    });
  }

  useEffect(() => {
    callApi();
  }, []);

  return (
    <View>
      <Header />
      <View style={styles.container}>
        <LocalDeaths local_deaths={items.data.local_deaths} />
      </View>
    </View>
  );
};

export default App;
