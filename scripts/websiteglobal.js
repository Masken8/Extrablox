var rbxun = document.getElementsByClassName("rbx-upgrade-now")[0]
var lisett = $("<li>").attr({"id": "eb.settings"}).insertBefore(rbxun);
var liA = $("<a>").attr({"href": chrome.extension.getURL("options.html")}).appendTo(lisett);
var Aspan = $("<span>").attr({"id": "Aspan"}).text("Extrablox Control Panel").appendTo(liA);
$(Aspan).on("mouseenter", function() {
	$(Aspan).css("color", "#00A2FF");
})
$(Aspan).on("mouseleave", function() {
	$(Aspan).css("color", "");
})
//debug
function optstest() {
	chrome.storage.sync.get({
		like: true //set to by default 
		}, function(items) {
		console.log("items: " + items.like);
	});
}
$(document).ready(optstest)

/*var asett = $("<a>").attr({"href": "/my/account#eb", "id": "asett"}).appendTo("#eb.settings");
var spansett = $("<span>").attr({"class": "eb-icon", "id": "span1sett"}).appendTo("#asett");
var spantxtsett = $("<span>").insertAfter("#span1sett").innerHTML = "Extrablox Settings";*/