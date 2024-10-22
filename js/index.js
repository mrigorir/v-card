let m = document.getElementById("modal"),
  c = document.getElementById("close"),
  ki = document.getElementById("keyInfo"),
  cv = document.getElementById("copyView"),
  curl = document.getElementById("copyURL"),
  qrv = document.getElementById("qrView"),
  qr = document.getElementById("qr"),
  s = document.getElementById("share"),
  sqr = document.getElementById("showQR"),
  sk = document.getElementById("showKey");

function dN(e) {
  e.style.display = "none";
}
window.addEventListener("load", () => {
  document.querySelector("#topActions").style.display = "flex";
  qr.innerHTML = new QRCode({
    content: window.location.href,
    container: "svg-viewbox",
    join: !0,
    ecl: "L",
    padding: 0,
  }).svg();
}),
  navigator.canShare
    ? s.addEventListener("click", () => {
        navigator.share({
          title: document.title,
          text: "You can view my Digital Business Card here:",
          url: window.location.href,
        });
      })
    : s.addEventListener("click", () => {
        //tC(m), (cv.style.display = "flex"), dN(qrv), ki && dN(ki);
      });

// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
  // Obtener el elemento del escáner QR
  const qrButton = document.getElementById("showQR");

  qrButton.addEventListener("click", function () {
    // Mostrar el modal al hacer clic en el botón
    const qrModal = new bootstrap.Modal(document.getElementById("qrModal"));
    qrModal.show();
  });
});
