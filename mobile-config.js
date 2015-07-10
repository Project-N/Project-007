// This section sets up some basic app metadata,
// the entire section is optional.
App.info({
    id: 'com.meteor.spyapp',
    name: 'Project 007',
    description: 'A GPS Spy app that uses your location along with the location of other users to assist in the playing of outdoor games',
    author: 'Cayden Lund, Dakota Harward, Trevor Jex, and Hyrum Lee',
    email: 'caydenlund@gmail.com',
    website: 'http://spyapp.meteor.com'
});

// Set up resources such as icons and launch screens.
App.icons({
    'iphone': 'icons/icon-60.png',
    'iphone_2x': 'icons/icon-60@2x.png',
    'iphone_3x': '',
    'ipad': '',
    'ipad_2x': '',
    'android_ldpi': '',
    'android_mdpi': '',
    'android_hdpi': '',
    'android_xhdpi': ''
    // ... more screen sizes and platforms ...
});

App.launchScreens({
    'iphone': 'splash/Default~iphone.png',
    'iphone_2x': 'splash/Default@2x~iphone.png'
    // ... more screen sizes and platforms ...
});

// Set PhoneGap/Cordova preferences
App.setPreference('BackgroundColor', '0xff3333');
App.setPreference('HideKeyboardFormAccessoryBar', true);
App.setPreference('Orientation', 'landscape');

// Pass preferences for a particular PhoneGap/Cordova plugin
App.configurePlugin('com.phonegap.plugins.facebookconnect', {
    APP_ID: '1234567890',
    API_KEY: 'supersecretapikey'
});