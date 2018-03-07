function submit_button(){
	var radios = document.getElementsByName('star');
	var rate;
	for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
        rate = (radios[i].value);
		break;
    }
}
		
	//alert (document.getElementById("msg").value);
	if((document.getElementById("name").value)==""){
		alert ("Please Enter Your Name");
	}else if((document.getElementById("comment").value)==""){
		alert ("Please Enter Your Comment");
	}else if(rate==null){
		alert("Please rate us");
	}else if(ValidateEmail(document.getElementById("email").value)){
		alert("Please enter a valid e-mail");
	}else
		{
	var para = document.createElement("H3");
	var msg = ((document.getElementById("comment").value)+" - "+(document.getElementById("name").value));
    var t = document.createTextNode(msg);
    para.appendChild(t);
    document.getElementById("recentComments").appendChild(para);
		
		document.getElementById("popupheading").innerHTML = 
		("Dear<b> "+document.getElementById("name").value+",</b> Thanks you for your valuable comment. You rated our website<b>"+
		rate+" </b>and your comment was <b>\""+document.getElementById("comment").value+"\"");
	
		var modal = document.getElementById('myModal');
		modal.style.display = "block";
	}
}
function closedialog() {
    var modal = document.getElementById('myModal');
	modal.style.display = "none";

}

function ValidateEmail(mail) {
 if ((/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/).test(mail)){
    return (false)
  }else
    return (true)
}
