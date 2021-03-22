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

var switchTrackColorTrue = "#9AD2AF";
var switchTrackColorFalse = "#E5E5E5";
var switchThumbColorTrue = "#4CB97A";
var switchThumbColorFalse = "#F4F3F4";

var cb_lightGreenColor = "#1D572A";
var cb_creamColor = "#F6EFED";
var cb_brownColor = "#812800";
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
global.placeHolderTextColor = lightGreyColor;
global.textColor = brownColor;
global.hyperlinkedTextColor = lightGreenColor;

global.cb_placeHolderTextColor = cb_lightGreyColor;
global.cb_textColor = cb_brownColor;
global.cb_hyperlinkedTextColor = cb_lightGreenColor;


// Colorblind mode value tracked, can be changed only on starting
//  page or within user settings.
global.colorblindMode = false;
