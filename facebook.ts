class Facebook{

    constructor(private name:string,private mbnumber:number,private studies:string,private dob:string,private familyMember:number,private totalFriend:number,private noOfBooksLike:number ){
           this.name=name;
           this.mbnumber=mbnumber;
           this.studies=studies;
           this.dob=dob;
           this.familyMember=familyMember;
           this.totalFriend=totalFriend;
           this.noOfBooksLike=noOfBooksLike;
    } //end constructor
    getnameofUser=()=>{ //getter
        return this.name;
    }
    getmobileNo=()=>{
        return this.mbnumber;
    }
    getschoolName=()=>{
        return this.studies;
    }
    getdateOfBirth=()=>{
        return this.dob;
    }
    getnoofFamilyMember=()=>{
        return this.familyMember;
    }
    gettotalNoofFriend=()=>{
        return this.totalFriend;
    }
    getbooksLike=()=>{
        return this.noOfBooksLike;
    }
    setnoofFamilyMember=(no:number)=>{ //setter
          this.familyMember=no;
    }
    setmobileNo=(no:number)=>{
        this.mbnumber=no;
    }
    settotalNoofFriend=(no:number)=>{
         this.totalFriend=no;
    }
    setbooksLike=(no:number)=>{
        this.noOfBooksLike=no;
    }

}//end class
let about= new Facebook("Anubhav",9999999999,"CSJM college kanpur","5/07/1996",5,305,10); //object creation
console.log("name of user:- "+about.getnameofUser());
console.log("mobile number:- "+about.getmobileNo());
console.log("name of college:- "+about.getschoolName());
console.log("date of birth:- "+about.getdateOfBirth());
console.log("number of family member in facbook:- "+about.getnoofFamilyMember());
console.log("total number of friends:- "+about.gettotalNoofFriend());
console.log("total number of books read:- "+about.getbooksLike());

//changing  value usíng setter
console.log("---------below changed value by using setter----")
about.setmobileNo(8888888888);
console.log("mobile number:- "+about.getmobileNo());
about.setnoofFamilyMember(8);
console.log("changed number of family member in facbook:- "+about.getnoofFamilyMember());
about.settotalNoofFriend(406);
console.log(" changed total number of friends:- "+about.gettotalNoofFriend());
about.setbooksLike(15);
console.log("changed total number of books read:- "+about.getbooksLike());


