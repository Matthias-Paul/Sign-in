var firstName=document.getElementById("firstName")

var lastName=document.getElementById("lastName")

var username=document.getElementById("username")

var email=document.getElementById("email")

var phoneNumber=document.getElementById("phoneNumber")

var password=document.getElementById("password")



var repeatPassword = document.getElementById("repeatPassword")

var firstText=document.getElementById("firstText")

var secondText=document.getElementById("secondText")

var thirdText=document.getElementById("thirdText")

var fourthText=document.getElementById("fourthText")

var fifthText=document.getElementById("fifthText")


var sixthText=document.getElementById("sixthText")

var seventhText=document.getElementById("seventhText")

var all =document.getElementById("all")
var sub=document.getElementById("sub")

var text=/[^A-Za-z]+$/;
var num = /^[0-9]\d*$/;
var mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var pass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

var another =document.getElementById("another")



  
sub.addEventListener("click",function(){
  
  if (text.test(firstName.value)){
    firstText.innerHTML = "Wrong input,your name must be in letter only!"
    
  } 
  if (!text.test(firstName.value)){
    firstText.innerHTML=" ";
  } 
  if (firstName.value.length == 0){
    firstText.innerHTML = "Enter your first name! ";
  } 
  if (firstName.value.length == 1  || firstName.value.length == 2 || 
      firstName.value.length == 3 ){
      firstText.innerHTML = "Your name must have at least four letters!"
      
    } 
    if (text.test(lastName.value)){
    secondText.innerHTML = "Wrong input,your name must be in letter only!"
    
  } 
  if (!text.test(lastName.value)){
    secondText.innerHTML = " ";
  } 
  if (lastName.value.length == 0){
    secondText.innerHTML = "Enter your last name!";
  } 
  if (lastName.value.length == 1  ||      lastName.value.length == 2 || 
      lastName.value.length == 3  ){
      secondText.innerHTML = "Your name must have at least four letters!"
      
    } 
    if (username.value.length == 0){
    thirdText.innerHTML = "Enter your username!"
  } 
  if (username.value.length == 1  ||      username.value.length == 2 || 
      username.value.length == 3  ){
      thirdText.innerHTML = "Your username must have at least four characters!"
      
    } 
    if (username.value.length > 3){
    thirdText.innerHTML = " "
  } 
  if (email.value.length == 0){
    fourthText.innerHTML = "Enter your email!"
  } 
  if (!mail.test(email.value)){
  fourthText.innerHTML = " Enter a valid email!"
} 
if (mail.test(email.value)){
  fourthText.innerHTML = " "
} 
if (phoneNumber.value.length == 0){
   fifthText.innerHTML = "Enter your  phone number!"
 } 
 if (phoneNumber.value.length < 10){
   fifthText.innerHTML = "Enter a valid phone number!"
 } 
 if (phoneNumber.value.length > 9){
   fifthText.innerHTML = " "
 } 
 if (!pass.test(password.value)){
   sixthText.innerHTML = " Enter a strong password:Your password must have at least six characters long, one uppercase letter,one lowercase letter and a digit! "
 } 
 if (pass.test(password.value)){
   sixthText.innerHTML = " "
 } 
 if (!pass.test(repeatPassword.value)){
   seventhText.innerHTML = " Enter a strong password:Your password must have at least six characters long, one uppercase letter,one lowercase letter and a digit! "
 } 
 if (pass.test(repeatPassword.value)){
   seventhText.innerHTML = " "
 } 
 if (password.value !== repeatPassword.value){
   seventhText.innerHTML = "Repeat password does not match with password! "
 } 
 if (repeatPassword.value == password.value){
   seventhText.innerHTML = " "
 } 
 
  
 if (!text.test(firstName.value) && !text.test(lastName.value) && username.value.length > 3 && mail.test(email.value) &&  phoneNumber.value.length > 9 && pass.test(password.value) && pass.test(repeatPassword.value) && repeatPassword.value == password.value){
   all.style.display="none"
   var name =document.getElementById("name")
   name.innerHTML =firstName.value
   another.style.display="block"
 }


})
















