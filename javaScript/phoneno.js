function validate(){
    var text = document.getElementById('text1').value;
    console.log(text);
    var regx = /[7-9]\d{9}/;
    if(regx.test(text)){

        document.getElementById('lbltext').innerHTML="Valid";
        document.getElementById('lbltext').style.visibility="visible";
        document.getElementById('lbltext').style.color="green";
    }
    else{
        document.getElementById('lbltext').innerHTML="InValid";
        document.getElementById('lbltext').style.visibility="visible";
        document.getElementById('lbltext').style.color="red";

    }
}