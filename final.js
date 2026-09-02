document.addEventListener("DOMContentLoaded", () => {
  // Añadir productos al carrito
  const btnsAnadir = document.querySelectorAll(".btn-anadir");
  const cartCount = document.querySelector(".cart-count");
  let count = 0;

  btnsAnadir.forEach(btn => {
    btn.addEventListener("click", () => {
      count++;
      cartCount.textContent = count < 10 ? `0${count}` : count;
      alert("¡Producto añadido a tu pedido!");
    });
  });

  // Notificación descarga CV
  const btnDescargarCV = document.getElementById("btnDescargarCV");
  const cvToast = document.getElementById("cvToast");

  if (btnDescargarCV) {
    btnDescargarCV.addEventListener("click", () => {
      cvToast.style.display = "block";
      setTimeout(() => {
        cvToast.style.display = "none";
      }, 3500);
    });
  }
});