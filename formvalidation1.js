function validatefirstname(){
	var fname = document.getElementById("firstname").value;
	var re1 = /^[a-zA-Z\s\'\-] {2,15}$/;

	if (re1.test(fname))//IF INPUT IS VALID UPDATE THE PAGE TO SHOW SUCCESSFUL ENTRY
	 {
	 	document.getElementById("firstnamePrompt").style.color= "green";
	 	document.getElementById("firstnamePrompt").innerHTML="<strong >valid</strong>"
	 	return true;
	 }
	 else
	 {//IF INPUT IS INVALID,UPDATE PAGE TO PROMPT FOR NEW INPUT
	 	document.getElementById("firstnamePrompt").style.color= "red";
	 	document.getElementById("firstnamePrompt").innerHTML="<strong >enter 2 & 15</strong>"
	 	return false; 
	 }
}
function validatelastname(){
	var lname = document.getElementById("lastname").value;
	var re2 = /^[a-zA-Z\s\'\-] {2,25}$/;
	if (re2.test(fname))
	 {
	 	document.getElementById("lastnamePrompt").style.color= "green";
	 	document.getElementById("lastnamePrompt").innerHTML="<strong >valid</strong>"
	 	return true;
	 }
	 else
	 {
	 	document.getElementById("lastnamePrompt").style.color= "red";
	 	document.getElementById("lastnamePrompt").innerHTML="<strong >enter 2 & 25</strong>"
	 	return false; 
	 }

}
function validatephone(){
	var phonenumber = document.getElementById("phone").value;
	var re3 = /^d{3}-\d{3}-\d{4}$/;

if (re3.test(phone number))//IF input is valid
	 {
	 	document.getElementById("phonePrompt").style.color= "green";
	 	document.getElementById("phonePrompt").innerHTML="<strong >valid</strong>"
	 	return (true);
	 }
	 else
	 {
	 	document.getElementById("phonePrompt").style.color= "red";
	 	document.getElementById("phonePrompt").innerHTML="<strong >use xxx-xxx-xxxx < /strong>"
	 	return(false) ; 
	 }
function calOrder(){
	var firstname =document.getElementById("firstname").value;
	var lastname =document.getElementById("lastname").value;
	var username=firstname +" "+ lastname;
	var phone =document.getElementById("phone").value;
	var price =document.getElementById("price").value;

	document.getElementById("ordercomfirm").innerHTML ="<h2>order summary:</h2>";
	document.getElementById("ordercomfirm").innerHTML +="<p>" + username.toUpperCase() +"<br>" + phone + "</p>";
	document.getElementById("ordercomfirm").innerHTML +="<p>order total: $" + price * quantity + "</p>";
}
function displayformvalues()
{
var str ='';
var elem =document.getElementById('widgetform').elements;
for(var i=0; i <  elem.length; i++)
{
	str += "<b>type: </b>" +elem[i].type+ "&nbsp&nbsp";
	str += "<b>name: </b>" +elem[i].name+ "&nbsp&nbsp";
	str += "<b>value: </b><i>" +elem[i].value + "</i>&nbsp&nbsp";
	str += "<BR>";
}
document.getElementById('formelements').innerHTML =str;
}


