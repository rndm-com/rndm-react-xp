import React from 'react';
import { Text, TouchableOpacity, Linking } from 'react-native';

const Item = ({styles = {}, uri, title = '' } = {}) => (
  <TouchableOpacity activeOpacity={0.9} onPress={() => Linking.openURL(uri)} >
    <Text style={[styles.subtitle, styles.hyperlink]}>{`- ${title}`}</Text>
  </TouchableOpacity>
);

export default Item;
