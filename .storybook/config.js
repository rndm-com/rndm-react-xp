import { create } from '@storybook/theming'
import { addParameters, configure, addDecorator } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { Root } from './decorators'

addDecorator(Root);

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});

addParameters({
  options: {
    storySort: (a, b) => {
      const sectionA = a[1].id.split('-')[0];
      const sectionB = b[1].id.split('-')[0];
      return sectionB.localeCompare(sectionA);
    },
    theme: create({
      base: 'light',
      brandTitle: 'RNDM',
      brandUrl: 'https://www.rndm.com'
    }),
    hierarchySeparator: /\/|\./,
    hierarchyRootSeparator: /\|/,
    panelPosition: 'bottom'
  }
});

const context = require.context('../src', true, /\.stories\.(js|mdx)$/);

configure(context, module);
