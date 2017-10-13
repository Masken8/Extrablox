var discTab = $("<li>").attr({"id": "tab-eb.game", "class": "rbx-tab tab-eb.game"}).insertAfter("#tab-game-instances");
var discAnchor = $("<a>").attr({"href": "#eb.game", "class": "rbx-tab-heading"}).appendTo(discTab);
$("<span>").attr({"class": "text-lead"}).text("Extrablox").appendTo(discAnchor);

var discPane = $("<div>").attr({"class": "tab-pane Extrablox"}).insertAfter("#game-instances");
$(".rbx-tab").css("width", "20%");

var content = $("<div>").attr({"class": "section-content", "style": "max-height: 500px;overflow-y: scroll; padding-top:0;padding-bottom:0;"}).appendTo(discPane);
console.log("Adding content");
var conth1 = $("<h1>").appendTo(content).text("[Insert Content Here]");
console.log("Added content");
var hrdiv1 = $("<hr>").insertAfter(conth1);
var textcont = $("<span>").insertAfter(hrdiv1).text("[Insert something here]")

var mpvb = document.getElementById("MultiplayerVisitButton");
var btnprm = document.getElementsByClassName("btn-primary-lg");

//var disclm = $("<span>").text("Disclaimer: Verified means it's not on our blacklist").insertAfter("#MultiplayerVisitButton");

$.getJSON(chrome.extension.getURL("JSON/verifiedgames.json"), function(data) {
	for(i = 0; i < data.blacklist.length; i++) {
		if(mpvb.getAttribute("placeid") === data.blacklist[i]) {
			btnprm[0].setAttribute("style", "background-color: #313131; border-color: #313131;")
			btnprm[0].innerHTML = "Blacklisted";
			var bl = $("<span>").text("This game is Blacklisted play at your own risk").insertAfter("#MultiplayerVisitButton")
			//var plusbverifyimg = $("<img>").insertAfter("#MultiplayerVisitButton").attr({"src": chrome.extension.getURL("img/Extrablox%20Verified.png")})
		}
	}
})

console.log(window.location.hash)

/*$.get("http://api.extrablox.com/reviews/?game="+ gameid ).done(function (data) {
	if (data.data) {
					
		//knownPremiums.push(userId);
		//resolve(true);
	} else {
					
		//resolve(false);
	}
}).fail(function () {
	reject([{ code: 0, message: "Ops... Your HTTP Request Failed" }]);
});*/

if(window.location.hash === "#eb.game") {
	//implement support for unknown roblox extensions that changes the horizontal tab
	$("#tab-about").removeClass("active");
	$("#tab-store").removeClass("active");
	$("#tab-leaderboards").removeClass("active");
	$("#tab-game-instances").removeClass("active");

	$("#about").removeClass("active");
	$("#store").removeClass("active");
	$("#leaderboards").removeClass("active");
	$("#game-instances").removeClass("active");

	$(discTab).addClass("active");
	$(discPane).addClass("active");
}
$(discTab).click(function(){
	$("#tab-about").removeClass("active");
	$("#tab-store").removeClass("active");
	$("#tab-leaderboards").removeClass("active");
	$("#tab-game-instances").removeClass("active");

	$("#about").removeClass("active");
	$("#store").removeClass("active");
	$("#leaderboards").removeClass("active");
	$("#game-instances").removeClass("active");

	$(discTab).addClass("active");
	$(discPane).addClass("active");
	//var tabcont = document.getElementById("Extrablox")
	//var container = $("<div>").attr({"class": "section game-extrablox-container"}).append(tabcont)
});