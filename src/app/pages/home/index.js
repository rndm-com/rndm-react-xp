import React from 'react';
import { View } from 'react-native';
import styles from './styles';

import { RNDMImage, WelcomeMessage, AttributionList } from '../../components';

export default () => (
  <View style={styles.container}>
    <RNDMImage style={styles.image} />
    <WelcomeMessage style={styles.title} />
    <AttributionList styles={styles} />
  </View>
);
