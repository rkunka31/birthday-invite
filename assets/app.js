// Shared setup for invite.html and index.html.
// Loads the theme stylesheet and fills [data-field] elements from config.js.
(function () {
  var P = window.PARTY;
  var params = new URLSearchParams(location.search);
  var theme = (params.get("theme") || P.theme || "default").replace(/[^a-z0-9-]/gi, "");

  document.documentElement.setAttribute("data-theme", theme);
  document.write('<link rel="stylesheet" href="themes/' + theme + '/theme.css">');

  function joinNames(names) {
    if (names.length < 2) return names.join("");
    return names.slice(0, -1).join(", ") + " & " + names[names.length - 1];
  }

  var ordinals = { 1: "1st", 2: "2nd", 3: "3rd" };
  var words = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];

  P.names = joinNames(P.kids);
  P.ageOrdinal = ordinals[P.age] || P.age + "th";
  P.ageWord = words[P.age] || String(P.age);
  P.telHref = "tel:+1" + P.host.phone.replace(/\D/g, "");
  P.smsHref = "sms:+1" + P.host.phone.replace(/\D/g, "");

  window.fillFields = function (root) {
    (root || document).querySelectorAll("[data-field]").forEach(function (el) {
      var key = el.getAttribute("data-field");
      var value = key.split(".").reduce(function (o, k) { return o && o[k]; }, P);
      if (value) {
        el.textContent = value;
      } else if (el.hasAttribute("data-hide-empty")) {
        el.closest("[data-hide-empty-scope]") ? el.closest("[data-hide-empty-scope]").remove() : el.remove();
      } else {
        el.textContent = el.getAttribute("data-placeholder") || "";
        el.classList.add("missing");
      }
    });
    (root || document).querySelectorAll("[data-href]").forEach(function (el) {
      el.setAttribute("href", P[el.getAttribute("data-href")]);
    });
  };

  document.addEventListener("DOMContentLoaded", function () {
    document.title = P.names + " – " + P.ageOrdinal + " Birthday";
    window.fillFields();
  });
})();
