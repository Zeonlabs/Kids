# Kids
Drawing for Kids 
React Native Voximplant Demo Application
The demo application that uses react-native-voximplant and Voximplant cloud platform for making/receiving audio/video calls.

Getting started
To get started, you'll need to register a free Voximplant developer account.

You'll need the following:

Voximplant application
two Voximplant users
VoxEngine scenario
routing setup
push certificates:
ios: VoIP services certificate. Follow this tutorial to upload the certificate to the Voximplant Control Panel
android: Firebase certificate. Follow this tutorial to upload the certificate to the Voximplant Control Panel
Automatic
We've implemented a special template to enable you to quickly use the demo – just install SDK tutorial from our marketplace.

Manual
You can set up it manually using our Getting started page and tutorials

VoxEngine scenario example:
require(Modules.PushService);
VoxEngine.addEventListener(AppEvents.CallAlerting, (e) => {
const newCall = VoxEngine.callUserDirect(
  e.call, 
  e.destination,
  e.callerid,
  e.displayName,
  null
);
VoxEngine.easyProcess(e.call, newCall, ()=>{}, true);
});
Build and run the app
Install React Native as described at https://facebook.github.io/react-native/docs/getting-started.html#content

Clone this repository

Run yarn install , all required components will be installed automatically

iOS
Run pod install from react-native-demo/ios folder
Start XCode and open generated VoximplantDemo.xcworkspace
Android
no steps required

Note: To enable android push notifications in the demo project:

Follow the instructions to add the certificates to the Voximplant Cloud
Add google-services.json file to android/app folder
Open app/build.gradle file and uncomment the //apply plugin: 'com.google.gms.google-services' line
It is recommended to run react-native start command from root project directory.

Run your project from XCode (Cmd+R) for iOS, or use react-native run-android to run your project on Android.

Useful links
Official guides:

Installing React Native SDK guide
Have a question
contact us via support@voximplant.com
create an issue
join our developer community
