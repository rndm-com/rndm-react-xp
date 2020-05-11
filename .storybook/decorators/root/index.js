import React from 'react';
import { View } from 'react-native';
import style from './style.json'

export default story => <View style={style}>{story()}</View>;
