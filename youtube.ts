class Video {

    constructor(protected vname:string ,protected views:number,protected likes:number,private dislike?:number,private subscriber?:string,private channelName?:string){
             this.vname = vname;
             this.views=views;
             this.likes=likes;
             this.dislike=dislike;
             this.subscriber=subscriber;
             this.channelName=channelName;
    } // end constructor

    getname = ()=>{   //getter 
         return this.vname;
    }
    getnumberOfViews= ()=>{
        return this.views;
    }
    getnumberOfLikes=()=>{
        return this.likes;
    }
    getnumberOfDislike=()=>{
        return this.dislike;
    }
    getnumberOfSubscriber=()=>{
        return this.subscriber;
    }
    getnameofChannel=()=>{
        return this.channelName;
    }
    
    setnumberOfViews=(M:number)=>{  //setter
        this.views=M;
    }
    setnumberOfLikes=(M:number)=>{
        this.likes=M;
    }
    setnumberOfDislikes=(k:number)=>{ //dislikes in thousand
          this.dislike=k;
    }
    setnumberofSubscriber=(M:string)=>{
        this.subscriber=M;
    }
}//end of class

class Upnext extends Video{  //Inheritance concept 
  
    constructor(protected vname:string,protected views:number,protected likes:number){
        super(vname,views,likes);
   
    }
    
    
    getname = ()=>{   //getter 
        return this.vname;
   }
   getnumberOfViews= ()=>{
       return this.views;
   }
   getnumberOfLikes=()=>{
       return this.likes;
   } 
   setnumberOfViews=(M:number)=>{  //likes in millions
    this.views=M;
}      

}
let videoInfo= new Video("Marvel Studios Avengers: Infinity War Official Trailer#1",16976824,3015286,4596,"7.1M","Marvel Entertainment" );
console.log("name of video:- "+videoInfo.getname());
console.log("number of views:- "+videoInfo.getnumberOfViews());
console.log("number of likes:- "+videoInfo.getnumberOfLikes());
console.log("number of dislikes:- "+videoInfo.getnumberOfDislike());
console.log("number of subscriber:- "+videoInfo.getnumberOfSubscriber());
console.log("channel name:- "+videoInfo.getnameofChannel());

//changing the value of view, like , dislike and subscriber using setter
videoInfo.setnumberOfViews(170966644);
 console.log("changed number of views:- "+videoInfo.getnumberOfViews());
 videoInfo.setnumberOfLikes(3216455)
console.log("changes number of likes:- "+videoInfo.getnumberOfLikes());
videoInfo.setnumberOfDislikes(4200);
console.log("changed number of dislikes:- "+videoInfo.getnumberOfDislike());
videoInfo.setnumberofSubscriber("7.3M");
console.log("changed number of subscriber:- "+videoInfo.getnumberOfSubscriber());

//for upnext video
console.log("---------INFO ABOUT UPNEXT VIDEO BELOW------");
let nextVideoInfo = new Upnext("AVENGERS INFINITY WAR Official Trailer #2 (2018) Marvel Superhero Movie HD",4038446,2300);
console.log("name of video:- "+nextVideoInfo.getname());
console.log("number of views:- "+nextVideoInfo.getnumberOfViews());
console.log("number of likes:- "+nextVideoInfo.getnumberOfLikes());
nextVideoInfo.setnumberOfViews(4238500);
console.log("changed number of views:- "+nextVideoInfo.getnumberOfViews());
















