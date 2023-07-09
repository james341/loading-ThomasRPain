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
	"image27.jpg",
	"image28.jpg",
	"image29.jpg",
	"image30.jpg",

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
	{ogg: "islandsodorlong.ogg", name: "【AN】 - Installation Music"},
	{ogg: "looknevernevergiveujp.ogg", name: "【AN】 - Installation Music"},
	{ogg: "post_train.ogg", name: "【AN】 - Installation Music"},
	{ogg: "duke.ogg", name: "【AN】 - Installation Music"},
	{ogg: "fishingoriginalmusicusdub.ogg", name: "【AN】 - Installation Music"},
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
	"Staff ALWAYS have the final say; if they tell you to stop- you got to stop. Otherwise, you can/will be warned!",
	"Do not attempt/say you are going to DDOS/crash the server. - Don't walk up to somebody and say I'm going to DDOS this fucking stupid server as a joke, it will be taken seriously and you will be permabanned!",
	"Please use common sense when being active and chatting on the server. Don't encourage people to break rules, don't spam staff, etc. Use your brain!",
        "Abide by the New Life Rule (NLR). You have to wait 3 minutes until you can go back to the location where you died. This applies to conflict as well!",
	"If you can not understand English at all, you will be banned! No Exceptions! A user who does not understand English cannot follow the rules. If a user is speaking a foreign language ( or none at all) or is breaking rules, and they do not respond to english (while they are obviously online) then they must be banned. A user who is able to speak english and is banned by misunderstanding is free to prove so on discord for an unban!",
	"Dupe-stealing cases are strictly as follows: Classic Dupe-stealing Taking a dupe or E2 from someone without their permission, aka classic dupe-stealing. (Taking their dupe while they have you on their prop protection, but they did not tell you to take a copy of the dupe.) Note that if they do say that you are allowed to take a copy of the dupe, they cannot revert this permission afterwards!",
	"Don't say anything that could possibly hurt others (racial slurs, general slurs, etc!",
	"Your privacy is safe with us. We do not collect your privacy to use it against you, and we don't collect your information at all. We also do not sell your information to anyone!",
	"Please do not abuse any tools! The more abuse they get, the more limited it gets for everyone!",
	"Respect other players. Try to avoid arguments- If someone is annoying you, screenshot/record their behaviour if you believe it is rule-breaking, or simply mute/ignore them. Ignorance is bss. And especially NO illicit behaviour. Do not harass players in an illicit, disgusting or creepy way. Keep interpersonal drama to DMs, even if said drama started in the server. The server is not a platform for Arguments!",
	"Users with the exiled status have earned it for going above and beyond to receive multiple bans within our communities and/or having tried to lodge a dispute or even try to chargeback (as it's against our policy of refunds). Being exiled makes you an outcast Users who were exiled are not to be mentioned within the community!",
	"No Spam. ( This includes annoying little sounds such as loud noises, burping/whistling, music, and advertising.) * You are allowed to mention other servers, but don't advertize people to go to them, or create drama about them. Let people choose and think for themselves!",
	"We do not provide refunds for donations or packages such as VIP, PAC3 Access, etc. There are no change-of-mind refunds on sale items. AN does not have a contractual obligation to provide donation packages. Donation packages can be revoked, and art subjects can be changed!",
	"Please do not abuse any tools! The more abuse they get, the more limited it gets for everyone!",
	"Using offensive humor is NOT okay. With everything going on, with racism and other problems around the world, we (as staff) will be more strict if we need to be!",
        "DDoS or the publicizing of other member's private information (DOX) will result in a permanent ban. (This includes all/any hacking threats!",
	"Do NOT abuse props in any way, shape, or form. (prop-blocking, prop-killing, prop-bridging, and prop-spamming!",
	"Accidentally killing someone (crossfire) is not RDM unless on purpose; if someone does walk in the way, that is allowed as long as you repay them.  This rule also applies toaccidentallyy running someone over!",
	"No metagaming or trying to take advantage in-game. It ruins the fun for those who take roleplaying seriously!",
	"No RDM, MRDM, VDM, etc. (Random Death Match, Mass Random Death Match, Vehicle Death Match, etc!",
	"No metagaming or trying to take advantage in-game. It ruins the fun for those who take roleplaying seriously!",
	"Do not abuse props in any way, shape, or form. (prop-blocking, prop-killing, prop-bridging, and prop-spamming!",
	"Any violations within these rules will have our loyal fellow mods give you a warning, if you continue to violate the rules it will result in a kick out or if major, banned. So pls, try not to cause trouble. Have a good day!",
        "Breaking NLR constitutes as returning to the place of your death within or before five minutes of your death. This can also mean returning and/or interacting with the player that killed you. If you are found breaking this rule, it’ll be dealt with by a Verbal Warn, Warn or Ban for repeat offenders. Returning to the vicinity of your base to watch the raiders (even if you aren’t interacting with them) counts as breaking NLR — don’t do it!"

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
