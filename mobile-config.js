// This section sets up some basic app metadata,
// the entire section is optional.
App.info({
    name: 'Project 007',
    description: 'A GPS Spy app that uses your location along with the location of other users to assist in the playing of outdoor games',
    author: 'Cayden Lund, Dakota Harward, Trevor Jex, and Hyrum Lee',
    email: 'caydenlund@gmail.com',
    website: 'http://spyapp.meteor.com',
    version: '0.0.1'
});

// Set up resources such as icons and launch screens.
App.icons({
    'iphone': '',
    'iphone_2x': '',
    'iphone_3x': '',
    'ipad': '',
    'ipad_2x': '',
    'android_ldpi': '',
    'android_mdpi': '',
    'android_hdpi': '',
    'android_xhdpi': ''
});

App.launchScreens({
    'iphone': '',
    'iphone_2x': '',
    'iphone5': '',
    'iphone6': '',
    'iphone6p_portrait': '',
    'iphone6p_landscape': '',
    'ipad_portrait': '',
    'ipad_portrait_2x': '',
    'ipad_landscape': '',
    'ipad_landscape_2x': '',
    'android_ldpi_portrait': '',
    'android_ldpi_landscape': '',
    'android_mdpi_portrait': '',
    'android_mdpi_landscape': '',
    'android_hdpi_portrait': '',
    'android_hdpi_landscape': '',
    'android_xhdpi_portrait': '',
    'android_xhdpi_landscape': ''
});

// Set PhoneGap/Cordova preferences
App.setPreference('BackgroundColor', '0xff3333');
App.setPreference('HideKeyboardFormAccessoryBar', true);
App.setPreference('Orientation', 'portrait');