document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btn-whatsapp");

  btn.addEventListener("click", () => {
    const telefono = "5491130016528";
    const mensaje = "Hola Jorge, vi tu web y quiero un presupuesto.";
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");
  });
});
