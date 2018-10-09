import React from 'react';
import { View } from 'react-native';
import * as Pages from './pages';

// eslint-disable-next-line no-console
console.disableYellowBox = true;

const App = () => <View style={{ height: '100%' }}><Pages.Home /></View>;

export default App;
