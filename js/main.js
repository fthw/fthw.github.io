---
# Main Javascript
---

(function(document){
  this.onload = function() {
    var scrollingElement = document.scrollingElement;
    var initialHeight = window.innerHeight;
    var header = document.querySelector('header');
    var runOnScroll =  function(evt) {
      if (evt && evt.preventDefault) {
        evt.preventDefault();
      }

      var klass = scrollingElement.className;

      if (scrollingElement.scrollTop > initialHeight * 0.8) {
        if (klass !== "compact") {
          console.debug("flagged as compact");
          scrollingElement.className = "compact";
        }
      } else {
        if (klass === "compact") {
          console.debug("un-flagged as compact");
          scrollingElement.removeAttribute("class");
        }
      }
    };
    runOnScroll();
    window.addEventListener("scroll", runOnScroll);

    window.addEventListener('click', function(event) {
      if (!event.target) {
        return;
      }
      var target = event.target.getAttribute("href");
      if (target && target[0] === "#") {
        event.preventDefault();
        document.querySelector(target).scrollIntoView({
          behavior: 'smooth'
        });
        return false;
      }
    })
  }
})(document);