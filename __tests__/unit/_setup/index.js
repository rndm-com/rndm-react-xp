import './polyfill';
import { generate } from '@rndm/test-gen';
global.window = {
  location: {
    reload: () => {},
    origin: 'origin',
    hostname: 'hostname',
  },
}
global.navigator = {
  controller: null,
  serviceWorker: {
    ready: {
      then: () => ({
        unregister: () => {},
      }),
    },
  },
}
generate({ removeSnapshots: 'unused' });
