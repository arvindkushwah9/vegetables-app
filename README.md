# Welcome to ReactNative 

## Requirements
1.	Nodejs version 12.13.1
2.	react-native-cli: 2.0.1
3.	react-native: 0.61.5
4.	[Android Studio](https://developer.android.com/studio/index.html?hl=es-419)
5.	An android emulator with Android 9.0 x86


## Set up the project

1. `git clone https://github.com/arvindkushwah9/React-Native-Example.git`
2. `cd React-Native-Example`
3. `npx install`


## How to run it on (Android)

1.	Open a Windows CMD or Linux terminal on the project root directory
2.	  Run `react-native link` command​​​​​​
3.	Open your android studio emulator
4.	Run `npx react-native run-android` command


## Run on Phisical device
In aonther terminal session start react native
Usefull tips you can run the app on you android or iphone phone by usb.

For android connect the cellphone in file trasfer mode and set USB debugging mode under developer options
add the device to your linux machine `lsusb` list the usb devices connected and shows something like 
```
Bus 002 Device 001: ID 1d6b:0003 Linux Foundation 3.0 root hub
Bus 001 Device 005: ID 04ca:3010 Lite-On Technology Corp. 
Bus 001 Device 003: ID 04f2:b483 Chicony Electronics Co., Ltd 
Bus 001 Device 002: ID 04f3:0235 Elan Microelectronics Corp. 
Bus 001 Device 008: ID *12d1:107e* Huawei Technologies Co., Ltd. 
Bus 001 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
```
after this run `echo 'SUBSYSTEM=="usb", ATTR{idVendor}=="12d1", MODE="0666", GROUP="plugdev"' | sudo tee /etc/udev/rules.d/51-android-usb.rules`
Finally start the app on your device `react-native run-android`

## Deployment
### Android Bundle debug build:
``react-native bundle --dev false --platform android --entry-file index.js --bundle-output ./android/app/src/main/assets/index.android.bundle --assets-dest ./android/app/src/main/res
``

### Generate your release APK:
``cd android && ./gradlew assembleRelease
``
### App Store

- Upgrade Build number:

```bash
cd ios/ && open React-Native-Example.xcworkspace
```

!['build number']('./build-number.png)

- Deploy:

```bash
yarn deploy:ios
```
