import React, {useState, useEffect} from 'react';

import axios from 'axios';
import styles from './utils/style';
import data from './utils/data';

import {Text, View} from 'react-native';
import Header from './components/Header/Header';
import LocalDeaths from './components/LocalDeaths/LocalDeaths';
import NewDeaths from './components/NewDeaths/NewDeaths';

const baseUrl = 'https://www.hpb.health.gov.lk/api/get-current-statistical';

const App = () => {
  const [items, setItems] = useState(data);

  const callApi = async () => {
    const result = await axios.get(baseUrl);
    setItems(result.data);
    console.log(result);
  };

  useEffect(() => {
    callApi();
  }, [items]);

  return (
    <View>
      <Header />
      <View style={styles.container}>
        <NewDeaths local_new_deaths={items.data.local_new_deaths} />
        <LocalDeaths local_deaths={items.data.local_deaths} />
      </View>
    </View>
  );
};

export default App;
