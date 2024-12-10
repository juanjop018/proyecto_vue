<template>
 <nav class="navbar navbar-expand-lg fixed-top nb">
    <div class="container-fluid">
      <a class="navbar-brand me-auto" href="Connection.html">
         <img class="imgt" src="@/assets/img/icons/Sin título.png" alt="Logo" />
      </a>
      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
            <img src="@/assets/img/icons/Sin título.png" alt="Logo" />
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-center flex-grow-1 pe-3">
            <li class="nav-item">
              <a class="nav-link mx-lg-2 active" aria-current="page" href="Connection.html">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-lg-2" href="ClassProgramingAdmin.html">Clases</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-lg-2" href="Events.html">Eventos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-lg-2" href="Report.html">Reportes</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-lg-2" href="Notificacion.html">Notificaciones</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-lg-2" href="StudentAdmission.html">Administración de Roles</a>
            </li>
          </ul>
        </div>
      </div>
      <a href="Perfil.html" class="icon iconp">
        <ion-icon name="person-circle-outline"></ion-icon>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
  </nav>
</template>

<script setup>

</script>

<style scoped>
/* Estilos específicos del navbar */
.nb {
  background: repeating-linear-gradient(#5f2f9a, #b269cd);
}

.imgt {
  width: 110px;
  height: 50px;
}

.navbar-toggler {
  border: none;
  font-size: 1.25rem;
}

.nav-link {
  color: rgb(0, 0, 0);
  font-weight: 500;
  position: relative;
}

.nav-link:hover,
.nav-link.active {
  color: rgb(255, 255, 255);
}

@media (min-width: 991px) {
  .nav-link::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background-color: rgb(228, 19, 179);
    visibility: hidden;
    transition: 0.3s ease-in-out;
  }

  .nav-link:hover::before,
  .nav-link:active::before {
    width: 100%;
    visibility: visible;
  }
}
</style>
