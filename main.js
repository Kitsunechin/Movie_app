//////////////////////move between tabs function//////////////////////

function openTab(evt, TabLink) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(TabLink).style.display = "block";
  evt.currentTarget.className += " active";
  name = 'Login'
}

////////////////////section choose a theatre////////////////////// 

var btns = document.getElementsByClassName("bt_city");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

  document.getElementById("theaters").addEventListener("change",() => {
    let selObj = document.getElementById("theaters");
    let selValue = selObj.options[selObj.selectedIndex].value;
    
    if (selValue == "poznan"){
    document.getElementById("kino_poznan").classList.remove("hide");
    document.getElementById("theaters").style.backgroundColor = "#1ABC9C";
    document.getElementById("kino_warszawa").classList.add("hide");
    document.getElementById("kino_wroclaw").classList.add("hide");
    document.getElementById("kino_krakow").classList.add("hide")}
    if (selValue == "warszawa"){
     document.getElementById("kino_warszawa").classList.remove("hide");
     document.getElementById("theaters").style.backgroundColor = "#1ABC9C";
     document.getElementById("kino_poznan").classList.add("hide");
     document.getElementById("kino_wroclaw").classList.add("hide");
     document.getElementById("kino_krakow").classList.add("hide")}
     if (selValue == "wroclaw"){
      document.getElementById("kino_wroclaw").classList.remove("hide");
      document.getElementById("theaters").style.backgroundColor = "#1ABC9C";
      document.getElementById("kino_warszawa").classList.add("hide");
      document.getElementById("kino_poznan").classList.add("hide");
      document.getElementById("kino_krakow").classList.add("hide")}
      if (selValue == "krakow"){
        document.getElementById("kino_krakow").classList.remove("hide");
        document.getElementById("theaters").style.backgroundColor = "#1ABC9C";
        document.getElementById("kino_warszawa").classList.add("hide");
        document.getElementById("kino_wroclaw").classList.add("hide")
        document.getElementById("kino_poznan").classList.add("hide")}
  })

/////////////////////////Choose your seat box////////////////////////////

  function seatFunction(){
  let seats = document.querySelector("#choose_seats");
    if (seats.style.display === "none") {
      seats.style.display = "block";
    } else {
      seats.style.display = "none";
    }
  }

for(let j=0;j<10;j++){
  let parent = document.createElement('div');
 parent.className = "seat invisible";
 
  for(let i=0;i<10;i++){
      let para = document.createElement('span');
    para.className = "seat available"
 
  parent.appendChild(para);
  }
  var element = document.getElementById('div1');
  element.appendChild(parent);
}

var sum=0;      
var elements = document.querySelectorAll('div span');

elements.forEach(element => {
element.addEventListener('click',() => {
  
   if (element.style.backgroundColor == 'crimson') {
     element.style.backgroundColor = 'MediumAquamarine'; sum = sum - 15;
     document.getElementById("price").innerHTML = + sum + " " + "PLN"}
     else {element.style.backgroundColor = 'crimson'; sum = sum + 15;
     document.getElementById("price").innerHTML = sum + " " + "PLN"}  
});
                     
});
      
////////////////////////Order Summary///////////////////////
var btn_summary = document.getElementById('submit');
var modal = document.getElementById("myModal");
var cross = document.getElementsByClassName("close")[0];

btn_summary.addEventListener('click',() => {
  modal.style.display = "block";
  var order = document.getElementById("order");
  order.innerHTML = "Thank you for your order !!!" + "<br>" +
  "You will receive your booking confirmation via email."
})
cross.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

///////////// form for login and user validation///////////////
var btn_log = document.getElementById('btn_log');

btn_log.addEventListener('click',() => {
  let mydata = JSON.parse(JSON.stringify(data));
  let liczba = Object.keys(mydata).length;
  let found = false;
  let in_imie = document.getElementById('input_name').value;
  let in_passwrord = document.getElementById('input_password').value;
  let in_email = document.getElementById('input_mail').value;

  
  for (i=0;i<liczba;i++){
   if (mydata[i].name.toUpperCase() == in_imie.toUpperCase() && mydata[i].password == in_passwrord && mydata[i].email.toUpperCase() == in_email.toUpperCase())
   {
       found = true; 

   }}


console.log(i);
if (found) {
   alert( "You are now loggedin");
   name = 'Movies'
   } 

else {
   alert("Username"+ " " + in_imie + " " + "has not been found or the entered data is incorrect");
   name = 'Login'
   }

})
document.addEventListener('click', (openTab(event, name)));
 
