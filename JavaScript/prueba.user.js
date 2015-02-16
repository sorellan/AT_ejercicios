// ==UserScript==
// @id             b77e78bb-5ab5-403b-ae45-7540077fbc64
// @name           Youtube - Right Side Description 
// @namespace      Takato
// @author         Takato
// @copyright      2010+, Takato (https://greasyfork.org/users/1158/)
// @licence        Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International - Additional conditions apply; https://greasyfork.org/scripts/976/
// @description    Moves the video description to the right of the video (like it used to be 2009 and earlier) and makes a few 2009ish style tweaks to the video page. (Previously known as Better Watch Page)
// @icon           https://i.imgur.com/RAHw2kQ.png https://i.imgur.com/qlQhuaa.png
// @icon64         https://i.imgur.com/qlQhuaa.png
// @version        2015.02.07
// @require        https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js
// @website        https://greasyfork.org/scripts/976/
// @noframes
// @grant          GM_getValue
// @grant          GM_setValue
// @grant          GM_deleteValue
// @grant          GM_registerMenuCommand
// @grant          GM_listValues
// @grant          GM_addStyle
// @include        http://www.youtube.com/*
// @include        http://youtube.com/*
// @include        https://www.youtube.com/*
// @include        https://youtube.com/*
// ==/UserScript==
// This script is licenced under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (https://creativecommons.org/licenses/by-nc-sa/4.0/) with additional conditions. 
// See https://greasyfork.org/scripts/976/ for full details of the licence and conditions.
var script = {};
script.version = "2015.02.07";

// SETTINGS -----------------------------

// Main settings: Available by clicking "More" below the video.
// - Change style between 'default' and 'retro'.

// Experimental settings - These features may break or be removed at any time.
script.expLightplayer = false; // Use the light player when using the retro theme. (HTML5 player only)

// --------------------------------------



// Everything below this line shouldn't be edited unless you are an advanced user or programmer and know what you are doing.

// Defining static script properties
script.name = "Right Side Description"; // Previously known as Better Watch Page
script.shortname = "RSD";
script.website = "https://greasyfork.org/scripts/976/";
script.discussion = "https://greasyfork.org/scripts/976/feedback";
script.icon = "https://i.imgur.com/RAHw2kQ.png";
script.icon64 = "https://i.imgur.com/qlQhuaa.png";
script.mainCSS = "/* Title */ #player {margin-top:5px;} #watch-headline-title, #watch-headline-title h1.yt {font-size:19px; font-weight:bold;} #watch-headline-title h1.yt {padding-bottom:3px !important;} #page.watch-stage-mode #watch-headline-title h1.yt {padding-bottom:1px !important;} #watch-headline-title .long-title {font-size:inherit !important; letter-spacing:normal !important;}  /* Sidebar */ #bwp-sidebar-container {overflow:auto; margin-top:0; max-height:390px; }  #watch7-user-header .yt-user-photo {float:left;} #watch7-user-header .yt-user-info {max-width:calc(100% - 58px); margin-left:58px; line-height:1.5em ;} #watch7-user-header .yt-user-info a {font-weight:bold;} #watch-uploader-info {margin-left:58px; line-height:1.5em;} #watch-uploader-info strong {font-weight:normal;} #watch7-subscription-container {float:right;}  #action-panel-details {clear:both;} #action-panel-details button.yt-uix-button-expander.yt-uix-expander-body {display:none;}  /* Below Video */ #watch-header {position:relative;}  #watch8-action-buttons, #watch8-ytcenter-buttons {border-top:none;} #watch-header > #watch7-views-info {height:100%; top:0 !important; bottom:0px !important; right:12px !important;} #watch7-views-info .watch-view-count {position:absolute; top:0; right:0;} #watch7-views-info .video-extras-sparkbars {position:absolute; bottom:3px; right:0; width:100%;} #watch-like-dislike-buttons {z-index:5; position:relative;}   /* Retro Mode*/ body.bwpRetro {background-color:white;} .bwpRetro .yt-card {box-shadow:none; border:1px solid #e2e2e2;} .bwpRetro #bwp-sidebar-container {background:#EEEEEE; border:1px solid #CCCCCC; font-size:12px; padding:6px;} .bwpRetro #bwp-sidebar-container a {color:#0033CC !important;} .bwpRetro #watch7-user-header {padding-bottom:5px;} .bwpRetro #watch7-user-header .yt-user-photo {border:1px solid #999999;} .bwpRetro #watch7-user-header .yt-user-photo > .video-thumb {border:1px solid white;} .bwpRetro #watch-description-text {line-height:15px;} .bwpRetro #watch-description-extras {border-top:1px solid #CCCCCC; padding-top:4px;} .bwpRetro #watch-description-extras .watch-meta-item:last-child .title, .bwpRetro #watch-description-extras .watch-meta-item:last-child .content {margin-bottom:0;}  .bwpRetro #yt-masthead-container {border-bottom-color:#CCCCCC;} .bwpRetro #logo-container:not(.doodle) #logo:not(.doodle) {background:url(https://s.ytimg.com/yt/img/master.png) 0px -641px; height:40px; width:98px; margin-top:-5px; margin-bottom:-5px;} .bwpRetro #logo-container .content-region {display:none;}";

// Defining dynamic script properties
script.cssLoaded = null;



function mainScript() {
	
	// Abort and clean up on non-video pages.
	if (!$("#page").hasClass("watch")) {
		$("body").removeClass("bwpScript");
		$("body").removeClass("bwpRetro");
		$("#bwpCrash").remove();
		if (script.cssLoaded) {
			$(script.cssLoaded).remove();
			script.cssLoaded = null;
		}
		return;
	}
		
	$("body").addClass("bwpScript");
	
	// Insert script crash notification
	if (!($("#bwpCrash").length > 0)) {
		$(document.createElement("div"))
			.attr("id", "bwpCrash")
			.attr("style", "font-size:12px !important; border:1px solid black !important; padding:2px !important; margin:2px !important; font-weight:bold !important; color:black !important; background:white !important;")
			.html("'" + script.name + "' has crashed. Try refreshing the page or checking for a script update.")
			.insertBefore("#page");
	}
	
	// Insert CSS
	if (!script.cssLoaded) {
		script.cssLoaded = GM_addStyle(script.mainCSS);
	}

	// Enable retro style (based on setting)
	if (GM_getValue("retrostyle", true)) {
		$("body").addClass("bwpRetro");
	} else {
		$("body").removeClass("bwpRetro");
	}
	applyLightPlayer(GM_getValue("retrostyle", true));
	
	// Add button to toggle retro style
	$(document.createElement("li"))
		.attr("id", "bwp-retrostyle-toggle")
		.appendTo("#action-panel-overflow-menu");
	$(document.createElement("button"))
		.attr("class", "yt-ui-menu-item has-icon")
		.html("<span class='yt-ui-menu-item-icon' style='margin-right:6px;margin-left:-14px;margin-bottom:-6px;opacity:1'><img width='24' src='"+script.icon+"'/></span> <span class='yt-ui-menu-item-label'>Toggle 'Retro Style'</span>")
		.click(function() {
			$("body").toggleClass("bwpRetro");
			GM_setValue("retrostyle", !GM_getValue("retrostyle", true));
			applyLightPlayer(GM_getValue("retrostyle", true));
		})
		.appendTo("#bwp-retrostyle-toggle");

	
	// Remove VEVO branding
	$("#watch7-container")
		.removeClass("watch-branded")
		.removeClass("watch-branded-banner");
	$("#player")
		.attr("style", "")
		.removeClass("watch-branded-banner");
	$("#watch7-branded-banner").remove();

	
	// Move description & channel details to the right-side column
	$(document.createElement("div"))
		.attr("id","bwp-sidebar-container")
		.attr("class", "yt-card yt-card-has-padding")
		.insertBefore("#watch7-sidebar-contents");
	$("#watch7-user-header").appendTo("#bwp-sidebar-container");
	$("#action-panel-details")
		.removeClass("yt-uix-expander-collapsed")
		.removeClass("yt-card")
		.removeClass("yt-card-has-padding")
		.appendTo("#bwp-sidebar-container");


	// Move Upload time into user info
	$("#watch-uploader-info").appendTo("#watch7-user-header");
	$("#watch-uploader-info strong").text(function() { return $(this).text().replace("Published on ",""); });

	// Relocate views for correct styling
	$("#watch7-views-info").appendTo("#watch-header");

	// Move title above video
	$("#player > #watch7-headline").remove(); // Remove any existing
	$("#watch-header #watch7-headline").prependTo("#player");

	// Remove Crash notice
	$("#bwpCrash").remove();

}

mainScript();
$(document).on("spfdone", mainScript);


function applyLightPlayer(activate) {
	if (script.expLightplayer && activate) {
		$("#movie_player:not(.bwpLightTheme):not(.light-theme)").addClass("bwpLightTheme").addClass("light-theme");
	} else {
		$("#movie_player.bwpLightTheme").removeClass("light-theme").removeClass("bwpLightTheme");
	}
}

// End of script