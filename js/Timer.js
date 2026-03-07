document.addEventListener("DOMContentLoaded", function() {
  window.setInterval(
    function() {
      var dat = /* @__PURE__ */ new Date();
      document.getElementById("TTime").textContent = dat.toLocaleTimeString();
    },
    100
  );
}, false);
