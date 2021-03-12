// Colors used by the application.
// Colorblind mode colors are prefixed with "cb_"
var lightGreenColor = '#A5DFB2';
var creamColor = "#F6EFED";
var brownColor = "#816868"; 
var blackColor = "#000000";
var whiteColor = "#FFFFFF";
var lightGreyColor = "#D3D3D3";

var cb_lightGreenColor = "#1D572A";
var cb_creamColor = "#F6EFED";
var cb_brownColor = "#812800";
var cb_blackColor = "#000000";
var cb_whiteColor = "#FFFFFF";
var cb_lightGreyColor = "#000000";


// Colorblind switch, landing page on application.
global.cbSwitchTrackColorTrue = lightGreenColor;
global.cbSwitchTrackColorFalse = cb_lightGreenColor;
global.cbSwitchThumbColorTrue = cb_lightGreenColor;
global.cbSwitchThumbColorFalse = lightGreenColor;
global.cbSwitchIosBackgroundColor = cb_blackColor;


// Screen properties.
global.statusBarColor = lightGreenColor;
global.pageBackgroundColor = creamColor;
global.contentDividerColor = brownColor;
global.lineColor = brownColor;

global.cb_statusBarColor = cb_lightGreenColor;
global.cb_pageBackgroundColor = cb_creamColor;
global.cb_contentDividerColor = cb_brownColor;
global.cb_lineColor = cb_brownColor;

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
