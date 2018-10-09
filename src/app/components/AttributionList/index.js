import React from 'react';
import { Text, View } from 'react-native';
import Item from './Item';
import attributions from './attributions';

const AttributionList = ({ styles = {} } = {}) => (
  <View style={styles.list}>
    <Text style={styles.subtitle}>A template built upon the wonderful work from the teams at:</Text>
    {
      attributions.map(attribution => (
        <Item styles={styles} {...attribution} />
      ))
    }
  </View>
);

export default AttributionList;
