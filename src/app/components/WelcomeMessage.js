import React from 'react';
import { Text } from 'react-native';

const WelcomeMessage = ({ style = {} } = {}) => (
  <Text style={style}>Welcome to RNDM React Cross Platform (XP)</Text>
);

export default WelcomeMessage;
