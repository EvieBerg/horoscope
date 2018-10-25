var signs = ["", "Capicorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagitarius"];
var message = ["", "Avast ye, ya needn't be a carouser!", "Sing a chantey and drink a clap of thunder this weekend", "Hornswaggling is in your future", "Landlubers and scallywags will test ye resolve this moon", "You are a son of a bisquit eater", "Sink me! Run a rig on the old salt", "Lets get this plunder", "Yo ho ho, aviod scurvy and wenches", "Comin soon ye shall be three sheets to the wind", "Walk the plank if ye dare trust a wench or ye shall be marooned in tag", "Aye, aye tis Davy Jones Locker for ye, unless yer hit the whip with ye leg o peg", "Get ye booty or shall a thousand curse be upon the"]
var pic = ["", "img/cap.png", "img/aqua.jpg", "img/picese.jpg", "img/aries.png", "img/taur.png","img/gem.png", "img/camcer.png", "img/leo-1.jpg", "img/virgo-1.jpg", "img/libra-3.jpg", "img/scorpio.jpg", "img/sag.jpg"];
var cruzSign = ["", "Ye is a monkey", "Ye is a rooster", "Ye is a dog, woof gur", "Ye is pig", "Ye be a rat", "ye be a ox", "Ye is a tiger", "Ye be a rabbit", "Ye be a dragon", "Ye be slithirin snake", "Ye is a horse", "Ye be a goat, bahhhh"];

function start(){
    var month = document.getElementById("month").value;
    var day = document.getElementById("day").value;
    var year = document.getElementById("year").value;

    var signNum = determineSign(month, day);
    var tedNum = tedCruz(year);
    document.getElementById("output1").innerHTML = signs[signNum];
    document.getElementById("output2").innerHTML = message[signNum];
    document.getElementById("showPic").src = pic[signNum];
    document.getElementById("zod").innerHTML = cruzSign[tedNum];

    var name = document.getElementById("name").value;
    valDate(month, day);
    document.getElementById("nameBack").innerHTML = "Ahoy " + name + birthday(month,day) + ". Yer sign ye be: ";
}

function determineSign(month,day) {
    var signNum = "";
    if (month == 1 && day <= 22) {
        signNum = 1;
    }
     if (month == 12 && day >= 19){
         signNum = 1;
     }
     if (month == 1 && day >= 20){
         signNum = 2;
     }
     if (month == 2 && day <= 18){
         signNum = 2;
     }
    if (month == 2 && day >= 19) {
        signNum = 3;
    }
    if (month == 3 && day <= 20) {
        signNum = 3;
    }
    if (month == 3 && day >= 21) {
        signNum = 4;
    }
    if (month == 4 && day <= 19) {
        signNum = 4;
    }
    if (month == 4 && day >= 20) {
        signNum = 5;
    }
    if (month == 5 && day <= 20) {
        signNum = 5;
    }
    if (month == 5 && day >= 21) {
        signNum = 6;
    }
    if (month == 6 && day <= 20) {
        signNum = 6;
    }
    if (month == 6 && day >= 21) {
        signNum = 7;
    }
    if (month == 7 && day <= 22) {
        signNum = 7;
    }
    if (month == 7 && day >= 23) {
        signNum = 8;
    }
    if (month == 8 && day <= 22) {
        signNum = 8;
    }
    if (month == 8 && day >= 23) {
        signNum = 9;
    }
    if (month == 9 && day <= 22) {
        signNum = 9;
    }
    if (month == 9 && day >= 23) {
        signNum = 10;
    }
    if (month == 10 && day <= 22) {
        signNum = 10;
    }
    if (month == 10 && day >= 23) {
        signNum = 11;
    }
    if (month == 11 && day <= 21) {
        signNum = 11;
    }
    if (month == 11 && day >= 22) {
        signNum = 12;
    }
    if (month == 12 && day <= 21) {
        signNum = 12;
    }
     return signNum;
}

function birthday(month,day){
    var birth = "";
    var today = new Date();
    var d = today.getDate();
    var m = today.getMonth() +1;
    if(month == m && day == d){
        birth = "Happy Birthday! ";
    }
    return birth;
}

function valDate(month,day) {
    if (month == 31 && (day == 9 || day == 4 || day == 6 || day == 11)) {
        alert("Invalid Date");
        return false;
    }
    if (month == 2 && (day == 31 || day == 30 || day == 29)) {
        alert("Invalid Date");
        return false;
    }
}

function tedCruz(year){
    var tedNum = "";
    if(year % 12 == 0){
        tedNum = 1;
    }
    if(year % 12 == 1){
        tedNum = 2;
    }
    if(year % 12 == 2){
        tedNum = 3;
    }
    if(year % 12 == 3){
        tedNum = 4;
    }
    if(year % 12 == 4){
        tedNum = 5;
    }
    if(year % 12 == 5){
        tedNum = 6;
    }
    if(year % 12 == 6){
        tedNum = 7;
    }
    if(year % 12 == 7){
        tedNum = 8;
    }
    if(year % 12 == 8){
        tedNum = 9;
    }
    if(year % 12 == 9){
        tedNum = 10;
    }
    if(year % 12 == 10){
        tedNum = 11;
    }
    if(year % 12 == 11){
        tedNum = 12;
    }
    return tedNum;
}

