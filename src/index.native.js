import { AppRegistry } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import App from './app/index';

const native = () => {
  return {
    apiLevel: DeviceInfo.getAPILevel(),
    applicationName: DeviceInfo.getApplicationName(),
    brand: DeviceInfo.getBrand(),
    buildNumber: DeviceInfo.getBuildNumber(),
    bundleId: DeviceInfo.getBundleId(),
    carrier: DeviceInfo.getCarrier(),
    deviceCountry: DeviceInfo.getDeviceCountry(),
    deviceId: DeviceInfo.getDeviceId(),
    deviceLocale: DeviceInfo.getDeviceLocale(),
    deviceName: DeviceInfo.getDeviceName(),
    firstInstallTime: DeviceInfo.getFirstInstallTime(),
    fontScale: DeviceInfo.getFontScale(),
    freeDiskStorage: DeviceInfo.getFreeDiskStorage(),
    installReferrer: DeviceInfo.getInstallReferrer(),
    instanceID: DeviceInfo.getInstanceID(),
    lastUpdateTime: DeviceInfo.getLastUpdateTime(),
    manufacturer: DeviceInfo.getManufacturer(),
    maxMemory: DeviceInfo.getMaxMemory(),
    model: DeviceInfo.getModel(),
    readableVersion: DeviceInfo.getReadableVersion(),
    serialNumber: DeviceInfo.getSerialNumber(),
    systemName: DeviceInfo.getSystemName(),
    systemVersion: DeviceInfo.getSystemVersion(),
    timezone: DeviceInfo.getTimezone(),
    totalDiskCapacity: DeviceInfo.getTotalDiskCapacity(),
    totalMemory: DeviceInfo.getTotalMemory(),
    uniqueID: DeviceInfo.getUniqueID(),
    userAgent: DeviceInfo.getUserAgent(),
    version: DeviceInfo.getVersion(),
    is24Hour: DeviceInfo.is24Hour(),
    isEmulator: DeviceInfo.isEmulator(),
    isTablet: DeviceInfo.isTablet(),
  };
};

window.DeviceInfo = native;

AppRegistry.registerComponent('rndm', () => App);
