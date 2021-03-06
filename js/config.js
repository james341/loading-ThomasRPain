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
	{ogg: "duke.ogg", name: "Nations - Installation Music"},
	{ogg: "nevernevernevergiveup.ogg", name: "Nations - Installation Music"},
	{ogg: "nevernevergiveedition.ogg", name: "Nations - Installation Music"},
	{ogg: "sirtophamhatt.ogg", name: "Nations - Installation Music"},
	{ogg: "looknevernevergiveujp.ogg", name: "Nations - Installation Music"},
	{ogg: "skarloey.ogg", name: "Nations - Installation Music"},
	{ogg: "Seasiderun.ogg", name: "Nations - Installation Music"},
	{ogg: "viaductsong.ogg", name: "Nations - Installation Music"},
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
	"Citizens are Including all Citizen's jobs and jobs which have Citizen properties! These will be cut down into 2 Category???s which are : - Children: Children's job ??? Ungrateful Toddler ??? Fat Kid ??? Bully]!",
	"Do not attempt/say you are going to DDOS/crash the server. - Don't walk up to somebody and say I'm going to DDOS this fucking stupid server as a joke, it will be taken seriously and you will be permabanned!",
	"Obviously, please use common sense when being active and chatting in the server. Don't ecourage people to break rules, don't spam staff, etc. Use your brain!",
        "This is an English-only server. If you speak other languages, the rest of the chat cannot participate in the discussion, so your messages are like spam. Also, the moderators cannot do their job effectively if they don't understand the language you're speaking!",
        "Disrespecting any of our players and/or staff members for any reason, under any circumstances is strongly forbidden!",
        "Advertising a platform/service can risk in punishment if done too much (ie: continuos attempts to advertise any service/platform which you own and/or are a high-ranking member!",
        "Do not PowerGame - You are not a superman. You cannot attack a group of people that is 2 times the size of your group. Example: 1 by 2, 2 by 4, and so on. (excl. self-defense) [Punishment: warn / Ban 10-20min!", 
        "No Racism or discrimination on textscreens, prop building, in voice chat, text chat, or anywhere else!",
        "Doxxing is the posting of identifying information about yourself or someone else. Doxxing is against the rules on Model. Even if you are an adult, doxxing yourself may encourage younger members of the model to do the same, so all forms of it are banned. There are several things that constitute doxxing!",
        "It's okay to make lewd jokes, but try not to be too vulgar, because it can make everyone else in the Server feel uncomfortable. Don't post pornographic images!",
        "Animatronics such as the Withered once and the Golden once have to stay in the Basement UNLESS the basement door is open. - Asking an Admin to open the Door will not help !! - Changing jobs to open the door and then changing jobs back to an Animatronic count as Failrp and will result in a warning!",
        "Prop Abuse Players may not abuse props/entities (Propkill/Prop Surf/Prop Block/Prop Spam/Prop Push/Prop Minge!",
        "You may not kill someone using discrimination based upon their race, sexual orientation, sex, etc. Doing such will be considered a higher count of RDM, and is subject to an immediate ban!",
        "KOS signs most are clearly placed at the entrance of a KOS area it must be sized and colored clearly any attempts to bait people into areas with obscure KOS signs will result in punishment from staff!",
        "Fear RP is in effect - respond to situations like you would in real life. For example, if someone pulls a gun on you and you are unarmed, you must follow their commands!",
        "RP is acting out the role of your character within the game. Behave as you would in your character's place in the context of the situation!",
        "You may not destroy your valuables in a raid to prevent them from being stolen. Leaving and then rejoining within 20 minutes to avoid printer loss and get them back is considered FailRP!",
        "Moderators reserve the right to punish/warn a user even if something isn't on the rules. (As long as it is fair, obviously!",
        "You can only have a maximum of three fading door entries/exits in your base (Fading doors that are used as doors to funnel users) you can have up to four fading door windows, boxes, etc!",
        "These rules are in place for the general health of the community. They exist for the sole purpose of helping the community prosper and expand!",
        "No concentration Camps or inappropriate structures. (Racist/Pornographic/Bashing of religions etc are not tolerated!",
        "It is forbidden to Prop Abuse, Fly on a prop / object, or to Lift, push someone, spam with a prop / object, as well as climb props that do not obey the laws of physics (you CAN build stairs) and build non-physical structures. It is also forbidden to build near the fountain and in the pizzeria. [Punishment: warn / Ban 10-20min!",
        "Using offensive humor is NOT okay. With everything going on, with racism and other problems around the world, we (as staff) will be more strict if we need to be!",
        "You cannot take over places. If you raid a place, you must leave after you have accomplished your goal. Do NOT stay to prevent people from returning for an extended period of time!",
        "If you are handcuffed, you must comply with the officer. Not doing so can be considered FailRP. If the police officer gets distracted and leaves you alone, you may attempt an escape!",
        "If somebody is wanted you may AOS/KOS the person. In order to KOS, you must warn the criminal at least 3 times to stop Moving. If they comply, you must arrest them instead!",
        "Any violations within these rules will have our loyal fellow mods give you a warning, if you continue to violate the rules it will result in a kick out or if major, banned. So pls, try not to cause trouble. Have a good day!",
        "KOS signs most are clearly placed at the entrance of a KOS area it must be sized and colored clearly any attempts to bait people into areas with obscure KOS signs will result in punishment from staff!"

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
