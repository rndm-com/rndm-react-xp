import DeviceInfo from 'detect-browser';

global.__DEV__ = process.env.NODE_ENV !== 'production';
window.DeviceInfo = DeviceInfo.detect;
