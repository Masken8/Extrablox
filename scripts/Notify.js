/*var userid;

$.getJSON("https://www.roblox.com/my/account/json").done(function (data) {
	userid = data.UserId
}).fail(function () {
	console.error({ code: 2, message: "Failed to get user"})
});

var groupCache = []
var shoutCache = []

function arraysEqual(arr1, arr2) {
    if(arr1.length !== arr2.length)
        return false;
    for(var i = arr1.length - 1; i--;) {
        if(!arr2.indexOf(arr1[i]))
            return false;
        }

    return true;
}

setInterval(function() {
	$.getJSON("https://api.roblox.com/users/" + userid + "/groups").done(function (data) {
		console.log(data)
		for (ii = 0; ii < data.length; ii++) {
			if (!arraysEqual(data, groupCache)) {
				groupCache.push(data[ii].Id.toString())
			}
		}
	})
		for (v = 0; v < groupCache.length; v++) {
			$.get("https://web.roblox.com/My/Groups.aspx?gid=" + groupCache[v]).done(function (dataA) {
				var elems = $(dataA);
				var finda = $('#ctl00_cphRoblox_GroupStatusPane_StatusTextField', elems);
				//console.log(finda.text())
				//shoutCache.find()
				//shoutCache.push({[groupCache[i]]: finda.text()})
				console.log(v)
				console.log(groupCache[v])
				//shoutCache[groupCache[v]] = finda.text()
				shoutCache.push({[groupCache[v]]: finda.text()})
				console.log(groupCache[v] + " :GC")
				console.log(shoutCache)
			})
		}
}, 10000);