import React from 'react';
import { Image } from 'react-native';

const RNDMImage = ({ style = {} } = {}) => (
  <Image
    style={style}
    source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/rndm-com.appspot.com/o/rndm_200.png?alt=media&token=ca705331-6963-4287-9687-bc526feb0226' }} />
);

export default RNDMImage;
