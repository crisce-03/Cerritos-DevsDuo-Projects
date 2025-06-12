  const mobileMenu = document.getElementById("mobile-menu");
  const menuIcon = document.getElementById("menu-icon");
  const closeIcon = document.getElementById("close-icon");
  const serviceIcon = document.getElementById("Service");
  const subServiceIcon = document.getElementById("SubService");
  const serviceIconMovil = document.getElementById("serviceMovil");
  const subServiceIconMovil = document.getElementById("subServiceMovil");


  menuIcon.addEventListener("click", () => {
    mobileMenu.classList.remove("translate-x-full");
    mobileMenu.classList.add("translate-x-0");
    menuIcon.classList.add("hidden");
    closeIcon.classList.remove("hidden");
  });

  closeIcon.addEventListener("click", () => {
  mobileMenu.classList.remove("translate-x-0");
  mobileMenu.classList.add("translate-x-full");
  closeIcon.classList.add("hidden");
  menuIcon.classList.remove("hidden");
  });

  serviceIcon.addEventListener("click", () => {
    subServiceIcon.classList.toggle("hidden");
  });

  serviceIconMovil.addEventListener("click", () => {
    subServiceIconMovil.classList.toggle("hidden");
  });


