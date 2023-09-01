// BUTON PENTRU REVENIREA LA PAGINA PRINCIPALA
class ButtonController {
  constructor(buttonId) {
    this.button = document.getElementById(buttonId);
    this.setupListeners();
  }

  setupListeners() {
    this.button.addEventListener("mouseover", () => {
      this.button.innerText = "Pagina Principală";
    });

    this.button.addEventListener("mouseout", () => {
      this.button.innerText = "Înapoi la pagina principală";
    });

    this.button.addEventListener("click", (event) => {
      event.preventDefault();
      window.location.href = "index.html";
    });
  }
}


// FUNCTIE DE SCROLL PENTRU SAGEATA din index.html 
// am selectat zona pana la care mi-am dorit sa se faca scroll, de aceea se regaseste "sectiune-destinatie"

document.addEventListener("DOMContentLoaded", function () {
  const scrollButton = document.getElementById("scrollButton");
  const sectiuneDestinatie = document.getElementById("sectiune-destinatie");

  scrollButton.addEventListener("click", function () {
    sectiuneDestinatie.scrollIntoView({ behavior: "smooth" });
  });
});


// BUTON PENTRU REVENIRE IN PARTEA DE SUS A PAGINII 
class ScrollToTopController {
  constructor(scrollToTopButtonId) {
    this.scrollToTopButton = document.getElementById(scrollToTopButtonId);
    this.setupListeners();
  }

  setupListeners() {
    this.scrollToTopButton.addEventListener("click", (event) => {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}


/* CONTAINER DE CONTACT din contact.html*/


class PopUp {
  constructor() {
      this.popup = document.getElementById("popup");
      this.popupButton = document.getElementById("popupButton");
      this.closeButton = document.getElementById("close");

      this.popupButton.addEventListener("click", () => this.togglePopUp());
      this.closeButton.addEventListener("click", () => this.togglePopUp());

      //ascunde pop up la incarcare
      this.closePopUp();

      //validare formular
      const contactForm = document.getElementById("contactForm");
      contactForm.addEventListener("submit", (event) => this.validateForm(event));
  }

  togglePopUp() {
      if (this.popup.style.display === "block") {
          this.closePopUp();
      } else {
          this.openPopUp();
      }
  }

  openPopUp() {
      this.popup.style.display = "block";
  }

  closePopUp() {
      this.popup.style.display = "none";
  }

  validateForm(event) {
      const nume = document.getElementById("nume").value;
      const prenume = document.getElementById("prenume").value;
      const telefon = document.getElementById("telefon").value;
      const email = document.getElementById("email").value;
      const mesaj = document.getElementById("mesaj").value;

      if (!nume || !prenume || !telefon || !email || !mesaj) {
          alert("Este necesar să completați toate câmpurile!");
          event.preventDefault(); 
      } else {
          // se continua trimiterea formularului
          const destinatar = "pojarbia@gmail.com"; 
          const subject = `Mesaj de la ${nume} ${prenume}`;
          const body = `Nume: ${nume}\nPrenume: ${prenume}\nTelefon: ${telefon}\nEmail: ${email}\n\nMesaj:\n${mesaj}`;
          const link = `mailto:${destinatar}?subject=${encodeURIComponent(
              subject
          )}&body=${encodeURIComponent(body)}`;
          window.location.href = link;
      }
  }
}
// Initializează pop-up-ul
const popUp = new PopUp();
