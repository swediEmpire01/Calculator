const displyDOM= document.getElementById("displyBox");
let disply="";


function number(num){
    disply=disply+num;
    displyDOM.value=disply;
}
function del(){
    displyDOM.value="";
    disply= "";
}
function answer(){
    disply= disply.replace("×","*").replace("××","**").replace("÷","/").trim();
    disply= eval(disply);
    displyDOM.value= disply;
}
function trim(){
    let length= disply.length;
    length= length-1;
    console.log(length);
    disply= disply.slice(0,length)
    displyDOM.value=disply;
}
function percent(){
    displyDOM.value=disply+ "%";
    disply=`${disply}/100`;
}

setInterval (function(){
    if(displyDOM.value.length < 10){
        displyDOM.style.fontSize="3em"
    }
    else if(displyDOM.value.length < 15){
        displyDOM.style.fontSize="2em"
    }
    else if(displyDOM.value.length < 20){
        displyDOM.style.fontSize="1.5em"
    }
    else if(displyDOM.value.length < 30){
        displyDOM.style.fontSize="1em"
    }
}, 500
)