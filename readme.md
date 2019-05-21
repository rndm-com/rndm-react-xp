# [RNDM](https://www.rndm.com) React XP

![](https://img.shields.io/badge/React-v16.8.6-green.svg) ![](https://img.shields.io/badge/React%20Native-v0.59.8-green.svg) ![](https://img.shields.io/badge/React%20Native%20Web-v0.11.2-green.svg) ![](https://img.shields.io/badge/React%20Native%20Windows-v0.57.0-orange.svg)

## About

This template is a simple and usable template for building cross-platform applications with [React](https://reactjs.org/), [React Native](https://facebook.github.io/react-native/) and [React Native Web](https://necolas.github.io/react-native-web).

Upon installation, the template will run immediately on iOS, Android and Web natively.

## Requirements

Before running this project you should have the correct environment set up for the devices you will be targeting. For a full guide on this process you can follow the setup instructions on the
React Native website

https://facebook.github.io/react-native/docs/getting-started.html

You can also checkout this medium blog:

https://medium.com/@MadApper/react-native-setting-up-the-environment-5c310ef814d5

For Windows Environment you can follow the below article:

https://shift.infinite.red/getting-started-with-react-native-development-on-windows-90d85a72ae65

## Installation

### From Git

If you are installing from git, you clone the repo from:

https://github.com/rndm-com/rndm-react-xp

### From rndm-cli

If you have already installed our rndm-cli package, then you can take advantage of the init method to easily create your new project.

[Click here for full instructions on this package >](https://www.rndm.com/docs/utils/cli)

## Usage

The template is extremely simple to set up and deploy.

### Installation

**Command**:
```sh
npm install
```
**Description**: Installs all the relevant dependencies for each platform.

_Be patient as this can take a little time!_

### Running

#### Web

**Command**:
```sh
npm run web
```
**Description**: Compiles all the web dependencies and launches a browser to begin running your code. This uses watchman to determine when there are changes and will update the project accordingly.

#### Native

**Command**:
```sh
npm run packager
```
**Description**: Since the iOS and Android platforms run their native code independently from the JavaScript code, we have separated the packager element away from the native compilation. When you run the packager, it bundles the JavaScript code ready to be used by either Android or iOS. You will need to follow this up with the next command for the native platform you require.

_**Please Note**: The next command should be run in a different tab/instance of your terminal._

#### iOS

**Command**:
```sh
npm run ios
```
**Description**: Compiles the native iOS code and opens the iOS Simulator.

#### tvOS

tvOS requires a little more setup to allow the easy running from command-line.

**Installation**

```sh
npm install -g ios-sim
```

**Command**:
```sh
npm run tvos
```
**Description**: Compiles the native tvOS code and opens the tvOS Simulator.

#### Android

**Command**:
```sh
npm run android
```
**Description**: Compiles the native Android code.

_**Please Note**: You need to have a connected android Emulator or device in order to run the Android code._

#### (BETA) Windows 10, Windows 10 Phone, Xbox

This is still undergoing testing. If you are a windows user and would like to contribute to this project, your input will be much appreciated!

**Command**:
```sh
npm run windows
```
**Description**: Compiles the native Windows UWP code.

_**Please Note**: This requires a windows environment to run._
