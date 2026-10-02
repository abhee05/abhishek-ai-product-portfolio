/* ==========================================================================
   Abhishek Sachdeva — AI Product Portfolio
   Vanilla JS: nav, reveal-on-scroll, case-study TOC, metric bars
   ========================================================================== */

(function () {
  "use strict";

  /* ---------- Mobile navigation ---------- */
  var navToggle = document.querySelector("[data-nav-toggle]");
  var navMenu = document.querySelector("[data-nav-menu]");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      var isOpen = navMenu.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      navToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    });

    /* Close menu when any link is clicked */
    navMenu.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
        navMenu.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });

    /* Close menu on Escape */
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && navMenu.classList.contains("is-open")) {
        navMenu.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.focus();
      }
    });
  }

  /* ---------- Footer year ---------- */
  var yearEl = document.querySelector("[data-year]");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* ---------- Reveal on scroll (subtle) ---------- */
  var revealEls = document.querySelectorAll("[data-reveal]");

  if ("IntersectionObserver" in window && revealEls.length) {
    var revealObserver = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    revealEls.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  /* ---------- Animated metric bars (evaluation) ---------- */
  var barRows = document.querySelectorAll("[data-bar]");
  var barAnimated = false;

  function animateBars() {
    if (barAnimated || !barRows.length) return;
    barRows.forEach(function (row) {
      var value = parseFloat(row.getAttribute("data-bar")) || 0;
      var target = row.querySelector(".bar-fill");
      if (target) {
        target.style.width = value * 100 + "%";
      }
    });
    barAnimated = true;
  }

  if (barRows.length) {
    if ("IntersectionObserver" in window) {
      var barsObserver = new IntersectionObserver(
        function (entries, observer) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              animateBars();
              observer.disconnect();
            }
          });
        },
        { threshold: 0.25 }
      );
      barsObserver.observe(barRows[0].closest("[data-bars]") || barRows[0]);
    } else {
      animateBars();
    }
  }

  /* ---------- Case study: sticky TOC active state ---------- */
  var tocLinks = document.querySelectorAll("[data-toc-link]");
  var csSections = document.querySelectorAll("[data-section]");

  if (tocLinks.length && csSections.length) {
    var tocObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            tocLinks.forEach(function (link) {
              var match =
                link.getAttribute("href") === "#" + entry.target.id;
              link.classList.toggle("is-active", match);
              if (match) {
                link.setAttribute("aria-current", "true");
              } else {
                link.removeAttribute("aria-current");
              }
            });
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );

    csSections.forEach(function (section) {
      tocObserver.observe(section);
    });
  }

  /* ---------- Smooth-scroll offset for sticky header ---------- */
  var header = document.querySelector(".site-header");
  if (header) {
    var headerHeight = header.offsetHeight;

    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener("click", function (event) {
        var targetId = link.getAttribute("href");
        if (targetId.length <= 1) return;
        var target = document.querySelector(targetId);
        if (!target) return;
        event.preventDefault();
        var top = target.getBoundingClientRect().top + window.scrollY - headerHeight - 12;
        window.scrollTo({ top: top, behavior: "smooth" });
      });
    });
  }
})();