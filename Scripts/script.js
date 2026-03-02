const mediaButtons = document.querySelectorAll(".media-button");
const everything = document.querySelectorAll("body *");
const aboutMeButton = document.querySelector(".aboutMeScrollButton");
const pricingButton = document.querySelector(".pricingScrollButton");
const workButton = document.querySelector(".workScrollButton");
const languageIcons = document.querySelectorAll(".tech-stack-language-icon");
const accordionButtons = document.querySelectorAll(".accordion-button");
const accordionContents = document.querySelectorAll(".accordion-content");

languageIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    window.location.href = icon.id;
  });
});

mediaButtons.forEach((mediaButton) => {
  var on = false;
  mediaButton.addEventListener("click", () => {
    if (mediaButton.id != "lightModeToggle") {
      window.location.href = mediaButton.id;
    } else {
      if (!on) {
        let currentHeight = document.body.style.height;
        mediaButton.src = "Images/LightMode.png";
        everything.forEach((element) => {
          element.classList.remove("darkmode");
          element.classList.add("lightmode");
        });
        document.body.style.background =
          "linear-gradient(45deg, rgba(200, 200, 200, 1), rgba(180, 180, 180, 1))";
        document.body.style.height = currentHeight;
        on = true;
      } else {
        let currentHeight = document.body.style.height;
        mediaButton.src = "Images/DarkMode.png";
        everything.forEach((element) => {
          element.classList.remove("lightmode");
          element.classList.add("darkmode");
        });
        document.body.style.background =
          "linear-gradient(45deg, rgba(30, 30, 50, 1), rgba(50, 50, 60, 1), rgba(20, 20, 20, 1))";
        document.body.style.height = currentHeight;
        on = false;
      }
    }
  });
});

aboutMeButton.addEventListener("click", () => {
  window.scrollTo({ left: 0, top: 700, behavior: "smooth" });
});
pricingButton.addEventListener("click", () => {
  window.scrollTo({ left: 0, top: 1250, behavior: "smooth" });
});
workButton.addEventListener("click", () => {
  window.scrollTo({ left: 0, top: 1900, behavior: "smooth" });
});
