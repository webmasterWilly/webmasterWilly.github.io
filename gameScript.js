document.onkeydown = (e) => {
  e = e || window.event;
  if (e.keyCode === 40) {
    window.open("index.html", "_self");
  } 
};
    
    let final = 0;
    function hoverFunc() {
      final += 1;
    }
    function randInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
    function randImg(el) {
      el.style.position = "absolute";
      el.style.top = randInt(0, 750) + "px";
      el.style.left = randInt(0, 1500) + "px";
    }
    function randImg2(el2) {
      el2.style.position = "absolute";
      el2.style.top = randInt(0, 800) + "px";
      el2.style.left = randInt(0, 1500) + "px";
    }
    setInterval(randImg2, 2000);
    let element = document.getElementById("img1");
    randImg(element);
    let element2 = document.getElementById("img2");
    randImg(element2);
    let element3 = document.getElementById("img3");
    randImg(element3);
    let element4 = document.getElementById("img4");
    randImg(element4);
    let element5 = document.getElementById("img5");
    randImg(element5);
    let element6 = document.getElementById("img6");
    randImg(element6);
    let element7 = document.getElementById("img7");
    randImg(element7);
    let element8 = document.getElementById("img8");
    randImg(element8);
    let element10 = document.getElementById("img10");
    randImg(element10);
    let element9 = document.getElementById("cheese1");
    randImg2(element9);
    let element11 = document.getElementById("cheese2");
    randImg2(element11);
    let element12 = document.getElementById("cheese3");
    randImg2(element12);
    
    
    function alerter() {
      alert("You touched " + final + " webmines on your journey!");
      location.reload();
    }
    
    function refresh() {
      location.reload();
    }

    let i = 0;
    let color = ["#568203", "#018749"];
    function shift() {
      var doc = document.getElementById("back");
    
      doc.style.backgroundColor = color[i];
        i = (i + 1) % color.length;
    }
    setInterval(shift, 750);

    let countdown = 300;
    var downloadTimer = setInterval(function(){
  if(countdown <= 0){
    clearInterval(downloadTimer);
    alert("You ran out of time! Womp womp");
  location.reload();
  }
  document.getElementById("stop").value = 300 - countdown;
  countdown -= 1;
}, 10);

document.addEventListener("mouseleave", function(event){

  if(event.clientY <= 0 || event.clientX <= 0 || (event.clientX >= window.innerWidth || event.clientY >= window.innerHeight))
  {

  alert("Out of Bounds!");
    final += 1;

  }
});
    let w = 0;
    function win() {
      w += 1;
      if (w == 3) {
        document.getElementById("cheese").style.display = "none";
        alert("You win!");
        alerter();
        location.reload();
      }
   }
     function bye() {
  document.getElementById("cheese1").style.display = "none";
}
    function bye2() {
  document.getElementById("cheese2").style.display = "none";
}
    function bye3() {
  document.getElementById("cheese3").style.display = "none";
}
