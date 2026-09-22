const accordionTitles = document.querySelectorAll(".footer__accordion-title");

accordionTitles.forEach((accordionTitle) => {
  accordionTitle.addEventListener("click", () => {
    if (accordionTitle.classList.contains("is-open")) {
      accordionTitle.classList.remove("is-open");
    } else {
      const accordionTitlesWithIsOpen = document.querySelectorAll(".is-open");
      accordionTitlesWithIsOpen.forEach((accordionTitleWithIsOpen) => {
        accordionTitleWithIsOpen.classList.remove("is-open");
      });
      accordionTitle.classList.add("is-open");
    }
    var accordionContent = accordionTitle.nextElementSibling;
    if (accordionContent.style.maxHeight) {
      accordionContent.style.maxHeight = null;
    } else {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
    }
  });
});
