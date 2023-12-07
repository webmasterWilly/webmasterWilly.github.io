let urlName = window.location.href;
let dayer = urlName.split("/")[3];
let dayer2 = dayer.split(".")[0];
document.getElementById("day").innerHTML = dayer2;

function darkFunc() {
  localStorage.setItem("serverDark", "black");
  location.reload();
}
function lightFunc() {
  localStorage.removeItem("serverDark");
  location.reload();
}
function deleteAll() {
  if (confirm("Are you sure you want a clean page?")) {
  localStorage.clear();
  location.reload();
  }
}
function saveSection() {
  var input = document.getElementById("sectionOne");
  localStorage.setItem("secOne", input.value);
}
function saveSection2() {
  var input = document.getElementById("sectionTwo");
  localStorage.setItem("secTwo", input.value);
}
function saveSection3() {
  var input = document.getElementById("sectionThree");
  localStorage.setItem("secThree", input.value);
}
function save() {
  var input = document.getElementById("searchBar1");
  localStorage.setItem("server", input.value);
  document.getElementById("next").style.display = "block";
}
function save2() {
  var input = document.getElementById("searchBar2");
  localStorage.setItem("servertwo", input.value);
  localStorage.setItem("showornah", "block");
  document.getElementById("next2").style.display = "block";
}
function save3() {
  var input = document.getElementById("searchBar3");
  localStorage.setItem("serverthree", input.value);
  localStorage.setItem("showornah2", "block");
  document.getElementById("next3").style.display = "block";
}
function save4() {
  var input = document.getElementById("searchBar4");
  localStorage.setItem("serverfour", input.value);
  localStorage.setItem("showornah3", "block");
}
function save5() {
  var input = document.getElementById("searchBar5");
  localStorage.setItem("serverfive", input.value);
  localStorage.setItem("showornah4", "block");
  document.getElementById("next4").style.display = "block";
}
function save6() {
  var input = document.getElementById("searchBar6");
  localStorage.setItem("serversix", input.value);
  // have item displayed in local storage
  localStorage.setItem("showornah5", "block");
  // display it on screen without screen reloading
  document.getElementById("next5").style.display = "block";
}
function save7() {
  var input = document.getElementById("searchBar7");
  localStorage.setItem("serverseven", input.value);
  localStorage.setItem("showornah6", "block");
  document.getElementById("next6").style.display = "block";
}
function save8() {
  var input = document.getElementById("searchBar8");
  localStorage.setItem("servereight", input.value);
}
function save9() {
  var input = document.getElementById("searchBar9");
  localStorage.setItem("servernine", input.value);
  localStorage.setItem("showornah7", "block");
  document.getElementById("next7").style.display = "block";
}
function save10() {
  var input = document.getElementById("searchBar10");
  localStorage.setItem("serverten", input.value);
  localStorage.setItem("showornah8", "block");
  document.getElementById("next8").style.display = "block";
}
function save11() {
  var input = document.getElementById("searchBar11");
  localStorage.setItem("servereleven", input.value);
}
function elim() {
  if (confirm("Are you sure you want to check off your first task?")) {
    document.getElementById("searchBar1").style.color = "green";
    localStorage.removeItem("server");
  }
  location.reload();
}
function elim2() {
  if (confirm("Are you sure you want to check off your second task?")) {
    document.getElementById("searchBar2").style.color = "green";
    localStorage.removeItem("servertwo");
    localStorage.setItem("showornah", "none");
  }
  location.reload();
}
function elim3() {
  if (confirm("Are you sure you want to check off your third task?")) {
    document.getElementById("searchBar3").style.color = "green";
    localStorage.removeItem("serverthree");
    localStorage.setItem("showornah2", "none");
  }
  location.reload();
}
function elim4() {
  if (confirm("Are you sure you want to check off your fourth task?")) {
    document.getElementById("searchBar4").style.color = "green";
    localStorage.removeItem("serverfour");
    localStorage.setItem("showornah3", "none");
  }
  location.reload();
}
function elim5() {
  if (confirm("Are you sure you want to check off your fifth task?")) {
    document.getElementById("searchBar5").style.color = "green";
    localStorage.removeItem("serverfive");
  }
  location.reload();
}
function elim6() {
  if (confirm("Are you sure you want to check off your sixth task?")) {
    document.getElementById("searchBar6").style.color = "green";
    localStorage.removeItem("serversix");
    localStorage.setItem("showornah4", "none");
  }
  location.reload();
}
function elim7() {
  if (confirm("Are you sure you want to check off your seventh task?")) {
    document.getElementById("searchBar7").style.color = "green";
    // remove item from local storage
    localStorage.removeItem("serverseven");
    // delete the item from the page
    localStorage.setItem("showornah5", "none");
  }
  location.reload();
}
function elim8() {
  if (confirm("Are you sure you want to check off your seventh task?")) {
    document.getElementById("searchBar8").style.color = "green";
    // remove item from local storage
    localStorage.removeItem("servereight");
    // delete the item from the page
    localStorage.setItem("showornah6", "none");
  }
  location.reload();
}
function elim9() {
  if (confirm("Are you sure you want to check off your seventh task?")) {
    document.getElementById("searchBar9").style.color = "green";
    // remove item from local storage
    localStorage.removeItem("servernine");
  }
  location.reload();
}
function elim10() {
  if (confirm("Are you sure you want to check off your seventh task?")) {
    document.getElementById("searchBar10").style.color = "green";
    // remove item from local storage
    localStorage.removeItem("serverten");
    // remove that item from the page
    localStorage.setItem("showornah7", "none");
  }
  location.reload();
}
function elim11() {
  if (confirm("Are you sure you want to check off your seventh task?")) {
    document.getElementById("searchBar11").style.color = "green";
    // remove item from local storage
    localStorage.removeItem("servereleven");
    // remove that item from the page
    localStorage.setItem("showornah8", "none");
  }
  location.reload();
}
// variables are getting all of the local storage attributes
let darkMod = localStorage.getItem("serverDark");
let sectorOne = localStorage.getItem("secOne");
let sectorTwo = localStorage.getItem("secTwo");
let sectorThree = localStorage.getItem("secThree");


let showornot8 = localStorage.getItem("showornah8");
let showornot7 = localStorage.getItem("showornah7");
let showornot6 = localStorage.getItem("showornah6");
let showornot5 = localStorage.getItem("showornah5");
let showornot4 = localStorage.getItem("showornah4");
let showornot3 = localStorage.getItem("showornah3");
let showornot2 = localStorage.getItem("showornah2");
let showornot = localStorage.getItem("showornah");


let stored1 = localStorage.getItem("server");
let stored2 = localStorage.getItem("servertwo");
let stored3 = localStorage.getItem("serverthree");
let stored4 = localStorage.getItem("serverfour");
let stored5 = localStorage.getItem("serverfive");
let stored6 = localStorage.getItem("serversix");
let stored7 = localStorage.getItem("serverseven");
let stored8 = localStorage.getItem("servereight");
let stored9 = localStorage.getItem("servernine");
let stored10 = localStorage.getItem("serverten");
let stored11 = localStorage.getItem("servereleven");
// these if statements use the local storage to determine what info is getting saved
if (darkMod != null) {
  document.getElementById("all").style.backgroundColor = "black";
  document.getElementById("all").style.color = "white";
  var blocky = document.getElementsByClassName("allSearch");
  for (var i = 0; i < blocky.length; i++) {
    blocky[i].style.backgroundColor = "black";
    blocky[i].style.color = "white";
  }
  var blocky2 = document.getElementsByClassName("big");
  for (var j = 0; j < blocky2.length; j++) {
    blocky2[j].style.backgroundColor = "black";
    blocky2[j].style.color = "white";
  }
  var blocky3 = document.getElementsByClassName("butter");
  for (var w = 0; w < blocky3.length; w++) {
    blocky3[w].style.backgroundColor = "#7CB9E8";
  }
}
if (sectorOne != null) {
  document.getElementById("sectionOne").value = sectorOne;
}
if (sectorTwo != null) {
  document.getElementById("sectionTwo").value = sectorTwo;
}
if (sectorThree != null) {
  document.getElementById("sectionThree").value = sectorThree;
}
if (stored1 != null) {
  document.getElementById("searchBar1").value = stored1;
}
if (stored2 != null) {
  document.getElementById("searchBar2").value = stored2;
}
if (stored3 != null) {
  document.getElementById("searchBar3").value = stored3;
}
if (stored4 != null) {
  document.getElementById("searchBar4").value = stored4;
}
if (stored5 != null) {
  document.getElementById("searchBar5").value = stored5;
}
if (stored6 != null) {
  document.getElementById("searchBar6").value = stored6;
}
if (stored7 != null) {
  document.getElementById("searchBar7").value = stored7;
}
if (stored8 != null) {
  document.getElementById("searchBar8").value = stored8;
}
if (stored9 != null) {
  document.getElementById("searchBar9").value = stored9;
}
if (stored10 != null) {
  document.getElementById("searchBar10").value = stored10;
}
if (stored11 != null) {
  document.getElementById("searchBar11").value = stored11;
}
if (showornot === "block") {
  document.getElementById("next").style.display = "block";
}
else if (showornot === "none") {
  document.getElementById("next").style.display = "none";
}
if (showornot2 === "block") {
  document.getElementById("next2").style.display = "block";
}
else if (showornot2 === "none") {
  document.getElementById("next2").style.display = "none";
}
if (showornot3 === "block") {
  document.getElementById("next3").style.display = "block";
}
else if (showornot3 === "none") {
  document.getElementById("next3").style.display = "none";
}
if (showornot4 === "block") {
  document.getElementById("next4").style.display = "block";
}
else if (showornot4 === "none") {
  document.getElementById("next4").style.display = "none";
}
if (showornot5 === "block") {
  document.getElementById("next5").style.display = "block";
}
else if (showornot5 === "none") {
  document.getElementById("next5").style.display = "none";
}
if (showornot6 === "block") {
  document.getElementById("next6").style.display = "block";
}
else if (showornot6 === "none") {
  document.getElementById("next6").style.display = "none";
}
if (showornot7 === "block") {
  document.getElementById("next7").style.display = "block";
}
else if (showornot7 === "none") {
  document.getElementById("next7").style.display = "none";
}
if (showornot8 === "block") {
  document.getElementById("next8").style.display = "block";
}
else if (showornot8 === "none") {
  document.getElementById("next8").style.display = "none";
}
