var usingiOSDevice = false;

// Colors used by the application.
// Colorblind mode colors are prefixed with "cb_"
var lightGreenColor = '#A5DFB2';
var darkGreenColor = "#4CB97A";
var creamColor = "#F6EFED";
var brownColor = "#816868"; 
var blackColor = "#000000";
var whiteColor = "#FFFFFF";
var offWhiteColor = "#F5F5F5";
var lightGreyColor = "#D3D3D3";
var darkGreyColor = "#9C9896";

var switchTrackColorTrue = "#9AD2AF";
var switchTrackColorFalse = "#E5E5E5";
var switchThumbColorTrue = "#4CB97A";
var switchThumbColorFalse = "#F4F3F4";

var cb_lightGreenColor = "#1D572A";
var cb_creamColor = "#F6EFED";
var cb_brownColor = "#5B4949";
var cb_blackColor = "#000000";
var cb_whiteColor = "#FFFFFF";
var cb_offWhiteColor = "#F5F5F5";
var cb_lightGreyColor = "#000000";


// Colorblind switch, located on the landing page on application.
global.cb_switchTrackColorTrue = lightGreenColor;
global.cb_switchTrackColorFalse = cb_lightGreenColor;
global.cb_switchThumbColorTrue = cb_lightGreenColor;
global.cb_switchThumbColorFalse = lightGreenColor;
global.cb_switchIosBackgroundColor = cb_blackColor;

// Switch appearances throughout the app
global.switchTrackColorTrue = switchTrackColorTrue;
global.switchTrackColorFalse = switchTrackColorFalse;
global.switchThumbColorTrue = switchThumbColorTrue;
global.switchThumbColorFalse = switchThumbColorFalse;


// Screen properties.
global.statusBarColor = lightGreenColor;
global.pageBackgroundColor = creamColor;
global.contentDividerColor = brownColor;
global.lineColor = brownColor;

global.cb_statusBarColor = cb_lightGreenColor;
global.cb_pageBackgroundColor = cb_creamColor;
global.cb_contentDividerColor = cb_brownColor;
global.cb_lineColor = cb_brownColor;


// Nav Bar properties.
global.navBarOnPressColor = whiteColor;
global.navBarBackgroundColor = lightGreenColor;
global.navBarIconColor = offWhiteColor;
global.navBarCurrentIconColor = darkGreenColor; 
global.navBarCurrentIconBackgroundColor = lightGreenColor; 

global.cb_navBarOnPressColor = cb_whiteColor;
global.cb_navBarBackgroundColor = cb_lightGreenColor;
global.cb_navBarIconColor = cb_offWhiteColor;
global.cb_navBarCurrentIconColor = cb_lightGreenColor; 
global.cb_navBarCurrentIconBackgroundColor = cb_whiteColor;


// Specific to buttons - not sure if the button outline is actually viewable.
// I think this is overwritten by textInputBorderColor.
global.optionButtonsBorderColor = blackColor;
global.optionButtonsColor = lightGreenColor;

global.cb_optionsButtonsBorderColor = cb_blackColor;
global.cb_optionButtonsColor = cb_lightGreenColor;


// Text input options.
global.textInputBorderColor = lightGreenColor;
global.textInputBlackBorderColor = blackColor;
global.textInputFillColor = whiteColor;
global.textInputColor = blackColor;

global.cb_textInputBorderColor = cb_lightGreenColor;
global.cb_textInputBlackBorderColor = cb_blackColor;
global.cb_textInputFillColor = cb_whiteColor;
global.cb_textInputColor = cb_blackColor;


// Any sort of text being used.
global.placeHolderTextColor = darkGreyColor;
global.textColor = brownColor;
global.hyperlinkedTextColor = darkGreenColor;

global.cb_placeHolderTextColor = cb_lightGreyColor;
global.cb_textColor = cb_brownColor;
global.cb_hyperlinkedTextColor = cb_lightGreenColor;


// Colorblind mode value tracked, can be changed only on starting
//  page or within user settings.
global.colorblindMode = false;

// User avatars with associated ID #s
global.avatars = [
    {
        id: 0, 
        imgSource: require('./app/shared/assets/gardener-avatar/s1h1c1.png')
    },
    {
        id: 1, 
        imgSource: require('./app/shared/assets/gardener-avatar/s1h1c2.png')
    },
    {
        id: 2, 
        imgSource: require('./app/shared/assets/gardener-avatar/s1h1c3.png')
    },
    {
        id: 3, 
        imgSource: require('./app/shared/assets/gardener-avatar/s1h1c4.png')
    },
    {
        id: 4,
        imgSource: require('./app/shared/assets/gardener-avatar/s1h1c5.png')
    },
    {
        id: 5,
        imgSource: require('./app/shared/assets/gardener-avatar/s1h1c6.png')
    },
    {
        id: 6,
        imgSource: require('./app/shared/assets/gardener-avatar/s1h2c1.png')
    },
    {
        id: 7,
        imgSource: require('./app/shared/assets/gardener-avatar/s1h2c2.png')
    },
    {
        id: 8,
        imgSource: require('./app/shared/assets/gardener-avatar/s1h2c3.png')
    },
    {
        id: 9,
        imgSource: require('./app/shared/assets/gardener-avatar/s1h2c4.png')
    },
    {
        id: 10,
        imgSource: require('./app/shared/assets/gardener-avatar/s1h2c5.png')
    },
    {
        id: 11,
        imgSource: require('./app/shared/assets/gardener-avatar/s1h2c6.png')
    },
    {
        id: 12,
        imgSource: require('./app/shared/assets/gardener-avatar/s1h3c1.png')
    },
    {
        id: 13,
        imgSource: require('./app/shared/assets/gardener-avatar/s1h3c2.png')
    },
    {
        id: 14,
        imgSource: require('./app/shared/assets/gardener-avatar/s1h3c3.png')
    },
    {
        id: 15,
        imgSource: require('./app/shared/assets/gardener-avatar/s1h3c4.png')
    },
    {
        id: 16,
        imgSource: require('./app/shared/assets/gardener-avatar/s1h3c5.png')
    },
    {
        id: 17,
        imgSource: require('./app/shared/assets/gardener-avatar/s1h3c6.png')
    },
    {
        id: 18,
        imgSource: require('./app/shared/assets/gardener-avatar/s1h4c1.png')
    },
    {
        id: 19,
        imgSource: require('./app/shared/assets/gardener-avatar/s1h4c2.png')
    },
    {
        id: 20,
        imgSource: require('./app/shared/assets/gardener-avatar/s1h4c3.png')
    },
    {
        id: 21,
        imgSource: require('./app/shared/assets/gardener-avatar/s1h4c4.png')
    },
    {
        id: 22,
        imgSource: require('./app/shared/assets/gardener-avatar/s1h4c5.png')
    },
    {
        id: 23,
        imgSource: require('./app/shared/assets/gardener-avatar/s1h4c6.png')
    },
    {
        id: 24,
        imgSource: require('./app/shared/assets/gardener-avatar/s1h5c1.png')
    },
    {
        id: 25,
        imgSource: require('./app/shared/assets/gardener-avatar/s1h5c2.png')
    },
    {
        id: 26,
        imgSource: require('./app/shared/assets/gardener-avatar/s1h5c3.png')
    },
    {
        id: 27,
        imgSource: require('./app/shared/assets/gardener-avatar/s1h5c4.png')
    },
    {
        id: 28,
        imgSource: require('./app/shared/assets/gardener-avatar/s1h5c5.png')
    },
    {
        id: 29,
        imgSource: require('./app/shared/assets/gardener-avatar/s1h5c6.png')
    },
    {
        id: 30,
        imgSource: require('./app/shared/assets/gardener-avatar/s1h6c1.png')
    },
    {
        id: 31,
        imgSource: require('./app/shared/assets/gardener-avatar/s1h6c2.png')
    },
    {
        id: 32,
        imgSource: require('./app/shared/assets/gardener-avatar/s1h6c3.png')
    },
    {
        id: 33,
        imgSource: require('./app/shared/assets/gardener-avatar/s1h6c4.png')
    },
    {
        id: 34,
        imgSource: require('./app/shared/assets/gardener-avatar/s1h6c5.png')
    },
    {
        id: 35,
        imgSource: require('./app/shared/assets/gardener-avatar/s1h6c6.png')
    },
    {
        id: 36,
        imgSource: require('./app/shared/assets/gardener-avatar/s2h1c1.png')
    },
    {
        id: 37,
        imgSource: require('./app/shared/assets/gardener-avatar/s2h1c2.png')
    },
    {
        id: 38,
        imgSource: require('./app/shared/assets/gardener-avatar/s2h1c3.png')
    },
    {
        id: 39,
        imgSource: require('./app/shared/assets/gardener-avatar/s2h1c4.png')
    },
    {
        id: 40,
        imgSource: require('./app/shared/assets/gardener-avatar/s2h1c5.png')
    },
    {
        id: 41,
        imgSource: require('./app/shared/assets/gardener-avatar/s2h1c6.png')
    },
    {
        id: 42,
        imgSource: require('./app/shared/assets/gardener-avatar/s2h2c1.png')
    },
    {
        id: 43,
        imgSource: require('./app/shared/assets/gardener-avatar/s2h2c2.png')
    },
    {
        id: 44,
        imgSource: require('./app/shared/assets/gardener-avatar/s2h2c3.png')
    },
    {
        id: 45,
        imgSource: require('./app/shared/assets/gardener-avatar/s2h2c4.png')
    },
    {
        id: 46,
        imgSource: require('./app/shared/assets/gardener-avatar/s2h2c5.png')
    },
    {
        id: 47,
        imgSource: require('./app/shared/assets/gardener-avatar/s2h2c6.png')
    },
    {
        id: 48,
        imgSource: require('./app/shared/assets/gardener-avatar/s2h3c1.png')
    },
    {
        id: 49, 
        imgSource: require('./app/shared/assets/gardener-avatar/s2h3c2.png')
    },
    {
        id: 50,
        imgSource: require('./app/shared/assets/gardener-avatar/s2h3c3.png')
    },
    {
        id: 51,
        imgSource: require('./app/shared/assets/gardener-avatar/s2h3c4.png')
    },
    {
        id: 52,
        imgSource: require('./app/shared/assets/gardener-avatar/s2h3c5.png')
    },
    {
        id: 53,
        imgSource: require('./app/shared/assets/gardener-avatar/s2h3c6.png')
    },
    {
        id: 54,
        imgSource: require('./app/shared/assets/gardener-avatar/s2h4c1.png')
    },
    {
        id: 55, 
        imgSource: require('./app/shared/assets/gardener-avatar/s2h4c2.png')
    },
    {
        id: 56,
        imgSource: require('./app/shared/assets/gardener-avatar/s2h4c3.png')
    },
    {
        id: 57,
        imgSource: require('./app/shared/assets/gardener-avatar/s2h4c4.png')
    },
    {
        id: 58,
        imgSource: require('./app/shared/assets/gardener-avatar/s2h4c5.png')
    },
    {
        id: 59,
        imgSource: require('./app/shared/assets/gardener-avatar/s2h4c6.png')
    },
    {
        id: 60,
        imgSource: require('./app/shared/assets/gardener-avatar/s2h5c1.png')
    },
    {
        id: 61,
        imgSource: require('./app/shared/assets/gardener-avatar/s2h5c2.png')
    },
    {
        id: 62,
        imgSource: require('./app/shared/assets/gardener-avatar/s2h5c3.png')
    },
    {
        id: 63,
        imgSource: require('./app/shared/assets/gardener-avatar/s2h5c4.png')
    },
    {
        id: 64,
        imgSource: require('./app/shared/assets/gardener-avatar/s2h5c5.png')
    },
    {
        id: 65,
        imgSource: require('./app/shared/assets/gardener-avatar/s2h5c6.png')
    },
    {
        id: 66,
        imgSource: require('./app/shared/assets/gardener-avatar/s2h6c1.png')
    },
    {
        id: 67,
        imgSource: require('./app/shared/assets/gardener-avatar/s2h6c2.png')
    },
    {
        id: 68,
        imgSource: require('./app/shared/assets/gardener-avatar/s2h6c3.png')
    },
    {
        id: 69,
        imgSource: require('./app/shared/assets/gardener-avatar/s2h6c4.png')
    },
    {
        id: 70,
        imgSource: require('./app/shared/assets/gardener-avatar/s2h6c5.png')
    },
    {
        id: 71,
        imgSource: require('./app/shared/assets/gardener-avatar/s2h6c6.png')
    },
    {
        id: 72,
        imgSource: require('./app/shared/assets/gardener-avatar/s3h1c1.png')
    },
    {
        id: 73,
        imgSource: require('./app/shared/assets/gardener-avatar/s3h1c2.png')
    },
    {
        id: 74,
        imgSource: require('./app/shared/assets/gardener-avatar/s3h1c3.png')
    },
    {
        id: 75,
        imgSource: require('./app/shared/assets/gardener-avatar/s3h1c4.png')
    },
    {
        id: 76,
        imgSource: require('./app/shared/assets/gardener-avatar/s3h1c5.png')
    },
    {
        id: 77,
        imgSource: require('./app/shared/assets/gardener-avatar/s3h1c6.png')
    },
    {
        id: 78,
        imgSource: require('./app/shared/assets/gardener-avatar/s3h2c1.png')
    },
    {
        id: 79,
        imgSource: require('./app/shared/assets/gardener-avatar/s3h2c2.png')
    }, 
    {
        id: 80,
        imgSource: require('./app/shared/assets/gardener-avatar/s3h2c3.png')
    },
    {
        id: 81,
        imgSource: require('./app/shared/assets/gardener-avatar/s3h2c4.png')
    },
    {
        id: 82,
        imgSource: require('./app/shared/assets/gardener-avatar/s3h2c5.png')
    },
    {
        id: 83,
        imgSource: require('./app/shared/assets/gardener-avatar/s3h2c6.png')
    },
    {
        id: 84,
        imgSource: require('./app/shared/assets/gardener-avatar/s3h3c1.png')
    },
    {
        id: 85,
        imgSource: require('./app/shared/assets/gardener-avatar/s3h3c2.png')
    },
    {
        id: 86,
        imgSource: require('./app/shared/assets/gardener-avatar/s3h3c3.png')
    },
    {
        id: 87,
        imgSource: require('./app/shared/assets/gardener-avatar/s3h3c4.png')
    },
    {
        id: 88,
        imgSource: require('./app/shared/assets/gardener-avatar/s3h3c5.png')
    },
    {
        id: 89,
        imgSource: require('./app/shared/assets/gardener-avatar/s3h3c6.png')
    },
    {
        id: 90,
        imgSource: require('./app/shared/assets/gardener-avatar/s3h4c1.png')
    },
    {
        id: 91,
        imgSource: require('./app/shared/assets/gardener-avatar/s3h4c2.png')
    }, 
    {
        id: 92,
        imgSource: require('./app/shared/assets/gardener-avatar/s3h4c3.png')
    },
    {
        id: 93,
        imgSource: require('./app/shared/assets/gardener-avatar/s3h4c4.png')
    },
    {
        id: 94,
        imgSource: require('./app/shared/assets/gardener-avatar/s3h4c5.png')
    },
    {
        id: 95,
        imgSource: require('./app/shared/assets/gardener-avatar/s3h4c6.png')
    },
    {
        id: 96,
        imgSource: require('./app/shared/assets/gardener-avatar/s3h5c1.png')
    },
    {
        id: 97,
        imgSource: require('./app/shared/assets/gardener-avatar/s3h5c2.png')
    },
    {
        id: 98,
        imgSource: require('./app/shared/assets/gardener-avatar/s3h5c3.png')
    },
    {
        id: 99,
        imgSource: require('./app/shared/assets/gardener-avatar/s3h5c4.png')
    },
    {
        id: 100,
        imgSource: require('./app/shared/assets/gardener-avatar/s3h5c5.png')
    },
    {
        id: 101,
        imgSource: require('./app/shared/assets/gardener-avatar/s3h5c6.png')
    },
    {
        id: 102,
        imgSource: require('./app/shared/assets/gardener-avatar/s3h6c1.png')
    },
    {
        id: 103,
        imgSource: require('./app/shared/assets/gardener-avatar/s3h6c2.png')
    },
    {
        id: 104,
        imgSource: require('./app/shared/assets/gardener-avatar/s3h6c3.png')
    },
    {
        id: 105,
        imgSource: require('./app/shared/assets/gardener-avatar/s3h6c4.png')
    },
    {
        id: 106,
        imgSource: require('./app/shared/assets/gardener-avatar/s3h6c5.png')
    },
    {
        id: 107, 
        imgSource: require('./app/shared/assets/gardener-avatar/s3h6c6.png')
    },
    {
        id: 108,
        imgSource: require('./app/shared/assets/gardener-avatar/s4h1c1.png')
    },
    {
        id: 109,
        imgSource: require('./app/shared/assets/gardener-avatar/s4h1c2.png')
    },
    {
        id: 110,
        imgSource: require('./app/shared/assets/gardener-avatar/s4h1c3.png')
    },
    {
        id: 111,
        imgSource: require('./app/shared/assets/gardener-avatar/s4h1c4.png')
    },
    {
        id: 112,
        imgSource: require('./app/shared/assets/gardener-avatar/s4h1c5.png')
    },
    {
        id: 113,
        imgSource: require('./app/shared/assets/gardener-avatar/s4h1c6.png')
    },
    {
        id: 114,
        imgSource: require('./app/shared/assets/gardener-avatar/s4h2c1.png')
    },
    {
        id: 115,
        imgSource: require('./app/shared/assets/gardener-avatar/s4h2c2.png')
    },
    {
        id: 116,
        imgSource: require('./app/shared/assets/gardener-avatar/s4h2c3.png')
    },
    {
        id: 117,
        imgSource: require('./app/shared/assets/gardener-avatar/s4h2c4.png')
    },
    {
        id: 118,
        imgSource: require('./app/shared/assets/gardener-avatar/s4h2c5.png')
    },
    {
        id: 119,
        imgSource: require('./app/shared/assets/gardener-avatar/s4h2c6.png')
    },
    {
        id: 120,
        imgSource: require('./app/shared/assets/gardener-avatar/s4h3c1.png')
    },
    {
        id: 121,
        imgSource: require('./app/shared/assets/gardener-avatar/s4h3c2.png')
    },
    {
        id: 122,
        imgSource: require('./app/shared/assets/gardener-avatar/s4h3c3.png')
    },
    {
        id: 123,
        imgSource: require('./app/shared/assets/gardener-avatar/s4h3c4.png')
    },
    {
        id: 124,
        imgSource: require('./app/shared/assets/gardener-avatar/s4h3c5.png')
    },
    {
        id: 125,
        imgSource: require('./app/shared/assets/gardener-avatar/s4h3c6.png')
    },
    {
        id: 126,
        imgSource: require('./app/shared/assets/gardener-avatar/s4h4c1.png')
    },
    {
        id: 127,
        imgSource: require('./app/shared/assets/gardener-avatar/s4h4c2.png')
    },
    {
        id: 128,
        imgSource: require('./app/shared/assets/gardener-avatar/s4h4c3.png')
    },
    {
        id: 129,
        imgSource: require('./app/shared/assets/gardener-avatar/s4h4c4.png')
    },
    {
        id: 130,
        imgSource: require('./app/shared/assets/gardener-avatar/s4h4c5.png')
    },
    {
        id: 131,
        imgSource: require('./app/shared/assets/gardener-avatar/s4h4c6.png')
    },
    {
        id: 132,
        imgSource: require('./app/shared/assets/gardener-avatar/s4h5c1.png')
    },
    {
        id: 133,
        imgSource: require('./app/shared/assets/gardener-avatar/s4h5c2.png')
    },
    {
        id: 134,
        imgSource: require('./app/shared/assets/gardener-avatar/s4h5c3.png')
    },
    {
        id: 135,
        imgSource: require('./app/shared/assets/gardener-avatar/s4h5c4.png')
    },
    {
        id: 136,
        imgSource: require('./app/shared/assets/gardener-avatar/s4h5c5.png')
    },
    {
        id: 137,
        imgSource: require('./app/shared/assets/gardener-avatar/s4h5c6.png')
    },
    {
        id: 138,
        imgSource: require('./app/shared/assets/gardener-avatar/s4h6c1.png')
    },
    {
        id: 139,
        imgSource: require('./app/shared/assets/gardener-avatar/s4h6c2.png')
    },
    {
        id: 140,
        imgSource: require('./app/shared/assets/gardener-avatar/s4h6c3.png')
    },
    {
        id: 141,
        imgSource: require('./app/shared/assets/gardener-avatar/s4h6c4.png')
    },
    {
        id: 142,
        imgSource: require('./app/shared/assets/gardener-avatar/s4h6c5.png')
    },
    {
        id: 143,
        imgSource: require('./app/shared/assets/gardener-avatar/s4h6c6.png')
    },
];
