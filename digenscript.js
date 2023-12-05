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
}
function elim() {
  if (confirm("Are you sure you want to check off your first task?")) {
    document.getElementById("searchBar1").style.color = "green";
    localStorage.removeItem("server");
  }
}
function elim2() {
  if (confirm("Are you sure you want to check off your second task?")) {
    document.getElementById("searchBar2").style.color = "green";
    localStorage.removeItem("servertwo");
    localStorage.setItem("showornah", "none");
  }
}
function elim3() {
  if (confirm("Are you sure you want to check off your third task?")) {
    document.getElementById("searchBar3").style.color = "green";
    localStorage.removeItem("serverthree");
    localStorage.setItem("showornah2", "none");
  }
}
function elim4() {
  if (confirm("Are you sure you want to check off your fourth task?")) {
    document.getElementById("searchBar4").style.color = "green";
    localStorage.removeItem("serverfour");
    localStorage.setItem("showornah3", "none");
  }
}
function elim5() {
  if (confirm("Are you sure you want to check off your fifth task?")) {
    document.getElementById("searchBar5").style.color = "green";
    localStorage.removeItem("serverfive");
  }
}
// variables are getting all of the local storage attributes
let darkMod = localStorage.getItem("serverDark");
let sectorOne = localStorage.getItem("secOne");
let sectorTwo = localStorage.getItem("secTwo");
let showornot3 = localStorage.getItem("showornah3");
let showornot2 = localStorage.getItem("showornah2");
let showornot = localStorage.getItem("showornah");
let stored1 = localStorage.getItem("server");
let stored2 = localStorage.getItem("servertwo");
let stored3 = localStorage.getItem("serverthree");
let stored4 = localStorage.getItem("serverfour");
let stored5 = localStorage.getItem("serverfive");
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
}
if (sectorOne != null) {
  document.getElementById("sectionOne").value = sectorOne;
}
if (sectorTwo != null) {
  document.getElementById("sectionTwo").value = sectorTwo;
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
