var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Video = /** @class */ (function () {
    function Video(vname, views, likes, dislike, subscriber, channelName) {
        var _this = this;
        this.vname = vname;
        this.views = views;
        this.likes = likes;
        this.dislike = dislike;
        this.subscriber = subscriber;
        this.channelName = channelName;
        this.getname = function () {
            return _this.vname;
        };
        this.getnumberOfViews = function () {
            return _this.views;
        };
        this.getnumberOfLikes = function () {
            return _this.likes;
        };
        this.getnumberOfDislike = function () {
            return _this.dislike;
        };
        this.getnumberOfSubscriber = function () {
            return _this.subscriber;
        };
        this.getnameofChannel = function () {
            return _this.channelName;
        };
        this.setnumberOfViews = function (M) {
            _this.views = M;
        };
        this.setnumberOfLikes = function (M) {
            _this.likes = M;
        };
        this.setnumberOfDislikes = function (k) {
            _this.dislike = k;
        };
        this.setnumberofSubscriber = function (M) {
            _this.subscriber = M;
        };
        this.vname = vname;
        this.views = views;
        this.likes = likes;
        this.dislike = dislike;
        this.subscriber = subscriber;
        this.channelName = channelName;
    } // end constructor
    return Video;
}()); //end of class
var Upnext = /** @class */ (function (_super) {
    __extends(Upnext, _super);
    function Upnext(vname, views, likes) {
        var _this = _super.call(this, vname, views, likes) || this;
        _this.vname = vname;
        _this.views = views;
        _this.likes = likes;
        _this.getname = function () {
            return _this.vname;
        };
        _this.getnumberOfViews = function () {
            return _this.views;
        };
        _this.getnumberOfLikes = function () {
            return _this.likes;
        };
        _this.setnumberOfViews = function (M) {
            _this.views = M;
        };
        return _this;
    }
    return Upnext;
}(Video));
var videoInfo = new Video("Marvel Studios Avengers: Infinity War Official Trailer#1", 16976824, 3015286, 4596, "7.1M", "Marvel Entertainment");
console.log("name of video:- " + videoInfo.getname());
console.log("number of views:- " + videoInfo.getnumberOfViews());
console.log("number of likes:- " + videoInfo.getnumberOfLikes());
console.log("number of dislikes:- " + videoInfo.getnumberOfDislike());
console.log("number of subscriber:- " + videoInfo.getnumberOfSubscriber());
console.log("channel name:- " + videoInfo.getnameofChannel());
//changing the value of view, like , dislike and subscriber using setter
videoInfo.setnumberOfViews(170966644);
console.log("changed number of views:- " + videoInfo.getnumberOfViews());
videoInfo.setnumberOfLikes(3216455);
console.log("changes number of likes:- " + videoInfo.getnumberOfLikes());
videoInfo.setnumberOfDislikes(4200);
console.log("changed number of dislikes:- " + videoInfo.getnumberOfDislike());
videoInfo.setnumberofSubscriber("7.3M");
console.log("changed number of subscriber:- " + videoInfo.getnumberOfSubscriber());
//for upnext video
console.log("---------INFO ABOUT UPNEXT VIDEO BELOW------");
var nextVideoInfo = new Upnext("AVENGERS INFINITY WAR Official Trailer #2 (2018) Marvel Superhero Movie HD", 4038446, 2300);
console.log("name of video:- " + nextVideoInfo.getname());
console.log("number of views:- " + nextVideoInfo.getnumberOfViews());
console.log("number of likes:- " + nextVideoInfo.getnumberOfLikes());
nextVideoInfo.setnumberOfViews(4238500);
console.log("changed number of views:- " + nextVideoInfo.getnumberOfViews());
