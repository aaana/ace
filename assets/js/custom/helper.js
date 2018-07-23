function GetRequest() {
    var url = location.search; //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}
var req = GetRequest();
var globalToken = req['token'];
function tokenInit()
{

var allA=$("a");
for(var a in allA){
    var element=$(allA[a]);
    console.log(element);
    element.attr("href",element.attr("href")+"?token="+globalToken);
}
}