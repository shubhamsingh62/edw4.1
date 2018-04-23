var Facebook = /** @class */ (function () {
    function Facebook(name, mbnumber, studies, dob, familyMember, totalFriend, noOfBooksLike) {
        var _this = this;
        this.name = name;
        this.mbnumber = mbnumber;
        this.studies = studies;
        this.dob = dob;
        this.familyMember = familyMember;
        this.totalFriend = totalFriend;
        this.noOfBooksLike = noOfBooksLike;
        this.getnameofUser = function () {
            return _this.name;
        };
        this.getmobileNo = function () {
            return _this.mbnumber;
        };
        this.getschoolName = function () {
            return _this.studies;
        };
        this.getdateOfBirth = function () {
            return _this.dob;
        };
        this.getnoofFamilyMember = function () {
            return _this.familyMember;
        };
        this.gettotalNoofFriend = function () {
            return _this.totalFriend;
        };
        this.getbooksLike = function () {
            return _this.noOfBooksLike;
        };
        this.setnoofFamilyMember = function (no) {
            _this.familyMember = no;
        };
        this.setmobileNo = function (no) {
            _this.mbnumber = no;
        };
        this.settotalNoofFriend = function (no) {
            _this.totalFriend = no;
        };
        this.setbooksLike = function (no) {
            _this.noOfBooksLike = no;
        };
        this.name = name;
        this.mbnumber = mbnumber;
        this.studies = studies;
        this.dob = dob;
        this.familyMember = familyMember;
        this.totalFriend = totalFriend;
        this.noOfBooksLike = noOfBooksLike;
    } //end constructor
    return Facebook;
}()); //end class
var about = new Facebook("Anubhav", 9999999999, "CSJM college kanpur", "5/07/1996", 5, 305, 10); //object creation
console.log("name of user:- " + about.getnameofUser());
console.log("mobile number:- " + about.getmobileNo());
console.log("name of college:- " + about.getschoolName());
console.log("date of birth:- " + about.getdateOfBirth());
console.log("number of family member in facbook:- " + about.getnoofFamilyMember());
console.log("total number of friends:- " + about.gettotalNoofFriend());
console.log("total number of books read:- " + about.getbooksLike());
//changing  value usíng setter
console.log("---------below changed value by using setter----");
about.setmobileNo(8888888888);
console.log("mobile number:- " + about.getmobileNo());
about.setnoofFamilyMember(8);
console.log("changed number of family member in facbook:- " + about.getnoofFamilyMember());
about.settotalNoofFriend(406);
console.log(" changed total number of friends:- " + about.gettotalNoofFriend());
about.setbooksLike(15);
console.log("changed total number of books read:- " + about.getbooksLike());
