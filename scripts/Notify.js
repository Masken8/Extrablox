/*var userid;

$.getJSON("https://www.roblox.com/my/account/json").done(function (data) {
	userid = data.UserId
}).fail(function () {
	console.error({ code: 2, message: "Failed to get user"})
});

var groupCache = []
var shoutCache = []

setInterval(function() {
	$.getJSON("https://api.roblox.com/users/" + userid + "/groups").done(function (data) {
		//console.log(data)
		for (i = 0; i < data.length; i++) {
			groupCache.push(data[i].Id)
		}
		for (v = 0; v < groupCache.length; v++) {
			$.get("https://web.roblox.com/My/Groups.aspx?gid=" + groupCache[v]).done(function (dataA) {
				var elems = $(dataA);
				var finda = $('#ctl00_cphRoblox_GroupStatusPane_StatusTextField', elems);
				//console.log(finda.text())
				//shoutCache.find()
				//shoutCache.push({[groupCache[i]]: finda.text()})
				console.log(groupCache[v])
				shoutCache[groupCache[v]] = finda.text()
				console.log(shoutCache)
			})
		}
	})
}, 10000);