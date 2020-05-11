import React from 'react';
import { View } from 'react-native';

import Component from "./home";

export default {
  title: 'Pages',
  decorators: [
    story => <View style={{ height: '100%' }} >{story()}</View>
  ],
};

export const Home = () => (
  <Component />
);
