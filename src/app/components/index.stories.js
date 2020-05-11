import React from 'react';
import { View } from 'react-native';
import { withKnobs, object } from "@storybook/addon-knobs";

import { colors } from '../../app/styles';
import * as Components from "./index";

export default {
  title: 'Base Components',
  decorators: [
    withKnobs,
    (story) => <View style={{ padding: 40 }}>{story()}</View>
  ],
};

export const RNDMImage = () => (
  <Components.RNDMImage style={object('style', {
    width: 100,
    height: 100,
  })} />
);

export const WelcomeMessage = () => (
  <Components.WelcomeMessage style={object('style', {
    color: colors.black[0],
    fontSize: 20,
  })} />
);

export const AttributionList = () => {
  const subtitle = object("subtitle", {
    color: colors.black[1],
    fontSize: 16,
    textAlign: 'left',
    marginTop: 10,
  });
  const hyperlink = object("hyperlink", {
    color: colors.blue[1],
  });
  const list = object("list", {
    justifyContent: 'flex-start',
    width: 300,
  })
  return (
    <Components.AttributionList styles={{
      subtitle,
      hyperlink,
      list,
    }} />
  )
}
