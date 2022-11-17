//       _           _    _                     _ 
//      | |         | |  | |                   | |
//   ___| | ___  ___| | _| |     ___   __ _  __| |
//  / __| |/ _ \/ _ \ |/ / |    / _ \ / _` |/ _` |
//  \__ \ |  __/  __/   <| |___| (_) | (_| | (_| |
//  |___/_|\___|\___|_|\_\______\___/ \__,_|\__,_|
//     version 2.16

// URL for the server logo
// Leave it blank to use text instead
// (Put the files in the images folder)
// (You can also use external URL)
var l_serverImage = "logo.png";

// Center logo?
// 'true' or 'false'
var l_centerLogo = false;

// Display current map and gamemode?
// 'true' or 'false'
var l_displayMapGamemode = true;

// Custom server name configuration
// Leave it blank for automatic server name
var l_serverName = "sleekLoad 2";

// Use a video for the background?
// Otherwise it will use images
// 'true' or 'false'
var l_bgVideo = false;

// Default available videos:
// "aurora.webm"
// "bluefall.webm"
// "bluetilefloor.webm"
// "bluewhitecircles.webm"
// "bokehlens.webm"
// "cleanbokeh.webm"
// "coldnight.webm"
// "colorfulburst.webm"
// "dancingstars.webm"
// "dropsflares.webm"
// "focusorangebokeh.webm"
// "glimmering.webm"
// "glowingrings.webm"
// "greencircles.webm"
// "hues.webm"
// "inthedeep.webm"
// "modernflourish.webm"
// "orangeaura.webm"
// "warminside.webm"
// "yellowgreen.webm"
//
// You can add your own video backgrounds
// Just make sure they are using webm VP8 format 
// (Place the videos in the backgrounds/videos folder)
// (You can also use external URL)
var l_background = "bluefall.webm";

// (Image-background only)
// Enable map-based background image?
// If enabled, the background will be an image based on the server current map
// You need to have a background image with the same name as the map
// Also, the image needs to be in .jpg format
// E.g: gm_flatgrass.jpg, gm_construct.jpg, rp_downtown_v4c_v2.jpg
// 'true' or 'false'
var l_bgImageMapBased = false;

// (Image-background only)
// Place one or more images
// Multiple images will automatically shuffle between them
// (Place the files in the backgrounds/images folder)
// (You can also use external URL)
var l_bgImages = [
	"image1.jpg",
        "image2.jpg",
        "image3.jpg",
        "image4.jpg",
        "image5.jpg",
        "image6.jpg",
        "image7.jpg",
        "image8.jpg",
        "image9.jpg",
        "image10.jpg",
        "image11.jpg",
        "image12.jpg",
        "image13.jpg",
        "image14.jpg",
        "image15.jpg",
        "image16.jpg",
        "image17.jpg",
        "image18.jpg",
        "image19.jpg",
        "image20.jpg",
        "image21.jpg",
        "image22.jpg",
        "image23.jpg",
        "image24.jpg",
        "image25.jpg",
        "image26.jpg",

];

// (Image-background only)
// Random background images order?
// 'true' or 'false'
var l_bgImagesRandom = true;

// (Image-background only)
// Delay between background images changes
// in milliseconds
var l_bgImageDuration = 5000;

// (Image-background only)
// Image background fade velocity
// in milliseconds
var l_bgImageFadeVelocity = 2000;

// Enable background overlay?
// 'true' or 'false'
var l_bgOverlay = true;

// Background darkening amount
// 0 for none (0%), 100 for pitch black (100%)
var l_bgDarkening = 50;

// Play music during the loading screen?
// 'true' or 'false'
var l_music = true;

// Display current music name?
// 'true' or 'false'
var l_musicDisplay = true;

// Music playlist
// Add as many youtube ids/urls or ogg files you want
// (Place the ogg files in the music folder)
// (You can also use external URL for the ogg files)
var l_musicPlaylist = [
	{ogg: "duke.ogg", name: "【AN】 - Installation Music"},
	{ogg: "nevernevernevergiveup.ogg", name: "【AN】 - Installation Music"},
	{ogg: "sirtophamhatt.ogg", name: "【AN】 - Installation Music"},
	{ogg: "looknevernevergiveujp.ogg", name: "【AN】 - Installation Music"},
	{ogg: "skarloey.ogg", name: "【AN】 - Installation Music"},
	{ogg: "Seasiderun.ogg", name: "【AN】 - Installation Music"},
	{ogg: "viaductsong.ogg", name: "【AN】 - Installation Music"},
];

// Random music order?
// 'true' or 'false'
var l_musicRandom = true;

// Music volume
// Choose a value between 0 (quietest) and 100 (loudest)
var l_musicVolume = 15;

// Enable custom messages?
// 'true' or 'false'
var l_messagesEnabled = true;

// Enter your custom messages below
var l_messages = [
	"Do not skybase. Your base will be removed, and you will be warned!",
	"Do not attempt/say you are going to DDOS/crash the server. - Don't walk up to somebody and say I'm going to DDOS this fucking stupid server as a joke, it will be taken seriously and you will be permabanned!",
	"DDoS or the publicising of another member's private information (DOX) will result in a permanent ban. (This includes any "hacking" threats as well!",
        "Disrespecting any of our players and/or staff members for any reason, under any circumstances, is strongly forbidden!",
        "Advertising a platform/service can risk in punishment if done too much (ie: continuos attempts to advertise any service/platform which you own and/or are a high-ranking member!",
        "You are not a superman. You cannot attack a group of people that is 2 times the size of your group. Example: 1 by 2, 2 by 4, and so on. (excl. self-defense) [Punishment: warn / Ban 10-20min!", 
        "No Racism or discrimination on textscreens, prop building, in voice chat, text chat, or anywhere else!",
        "Doxxing is the posting of identifying information about yourself or someone else. Doxxing is against the rules on Model. Even if you are an adult, doxxing yourself may encourage younger members of the model to do the same, so all forms of it are banned. There are several things that constitute doxxing!",
        "You may not kill someone using discrimination based on their race, sexual orientation, sex, etc. Doing so will be considered a higher count of RDM and is subject to an immediate ban!",
        "KOS signs are typically placed at the entrance to a KOS area; they must be clearly sized and colored; any attempts to lure people into areas with obscure KOS signs will result in staff punishment!",
        "Fear RP is in effect—respond to situations like you would in real life. (For example, if someone pulls a gun on you and you are unarmed, you must follow their commands!",
        "RP is acting out the role of your character within the game. (Behave as you would in your character's place in the context of the situation!",
        "ALSO, NOTICE THAT: Staff has the final say; if they tell you to stop, you must stop.Otherwise, consider yourself forewarned!",
        "You can only have a maximum of three fading door entries/exits in your base (Fading doors that are used as doors to funnel users) you can have up to four fading door windows, boxes, etc!",
        "Do not impersonate other players, staff, content creators, etc!",
        "No concentration camps or inappropriate structures Racist/pornographic/religious bashing, for example, is not tolerated!",
        "It is forbidden to prop abuse, fly on a prop or object, lift, push, or spam someone with a prop or object, as well as climb props that do not obey the laws of physics (you CAN build stairs) and build non-physical structures. It is also forbidden to build near the fountain and in the pizzeria. [Penalty: a warning or a ban for 10-20 minutes!",
        "You cannot take over positions. If you raid a place, you must leave after you have accomplished your goal. Do not stay to prevent people from returning for an extended period of time!",
        "If you are handcuffed, you must comply with the officer. Failure to do so will result in a FailRP. If the police officer gets distracted and leaves you alone, you may attempt to escape!",
        "If somebody is wanted, you may AOS or KOS the person. In order to KOS, you must warn the criminal at least three times to stop moving. If they comply, you must arrest them instead!",
        "Any violations within these rules will have our loyal fellow moderators give you a warning; if you continue to violate the rules, it will result in a kick out or, if major, a ban. So please try not to cause trouble. Have a good day!",
        "When playing as any Police Officer class, don't abuse it. If you do, you will be blacklisted (and possibly banned). Keep your IC name realistic, not a username. It will be changed if it is found unrealistic!"

];

// Random message order?
// 'true' or 'false'
var l_messagesRandom = true;

// Delay between message changes
// in milliseconds
var l_messagesDelay = 5000;

// Messages fade time
// in milliseconds
var l_messagesFade = 1000;

// Show errors inside Garry's Mod?
// Can be useful for finding errors
// 'true' or 'false'
var l_showErrorsIngame = true;

//==============================================================
//========================== WARNING ===========================
//==============================================================
//============ Do not edit anything below this line ============
//==============================================================
var checkConfigFile = function() {
	return true;
};
