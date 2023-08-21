/*buton pentru revenirea la pagina principala*/

document.addEventListener("DOMContentLoaded", function() {
  var butonInapoi = document.getElementById("butonInapoi");

  butonInapoi.addEventListener("mouseover", function() {
    butonInapoi.innerText = "Pagina Principală";
  });

  butonInapoi.addEventListener("mouseout", function() {
    butonInapoi.innerText = "Înapoi la pagina principală";
  });

  butonInapoi.addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "index.html"
  });
});



/*functie de scroll pentru sageata din index.html 
-am selectat zona pana la care mi-am dorit sa se faca scroll, de aceea se regaseste "sectiune-destinatie"*/

document.addEventListener("DOMContentLoaded", function() {
  var scrollButton = document.getElementById("scrollButton");
  var sectiuneDestinatie = document.getElementById("sectiune-destinatie");

  scrollButton.addEventListener("click", function() {
    sectiuneDestinatie.scrollIntoView({ behavior: "smooth" });
  });
});



/* buton pentru revenire la partea de sus a paginii*/

document.addEventListener("DOMContentLoaded", function() {
  var scrollToTopButton = document.getElementById("scrollToTopButton");

  scrollToTopButton.addEventListener("click", function(event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});


