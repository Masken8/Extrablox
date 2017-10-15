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

/*function resolve(bool) {
	if (bool) {
		return;
	} else {
		return;
	}
	
	//bool is premium or not
}*/

//get userid from roblox api

var userid;

$.getJSON("https://www.roblox.com/my/account/json").done(function (data) {
	console.log(data)
	userid = data.UserId
	console.log(userid)
	//hasasset()
}).fail(function () {
	console.error({ code: 2, message: "Failed to get user"})
});

//assetid 1108604184

/*function hasasset() {
	$.get("https://api.roblox.com/Ownership/HasAsset?userId="+ userid + "&assetId=1108604184").done(function (data) {
		if (data) {
			console.log("Ya");
			console.log(data);
			
			//resolve(true); 
		} else {
			console.log("Nah");
			
			//resolve(false);
		}
	}).fail(function () {
		console.error({ code: 1, message: "Failed to get ownership" });
	});
}*/

//implement support for unknown roblox extensions that changes the horizontal tab
function horiztabcl() {
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

if(window.location.hash === "#eb.game") {
	horiztabcl()
}
$(discTab).click(function(){
	horiztabcl()
});