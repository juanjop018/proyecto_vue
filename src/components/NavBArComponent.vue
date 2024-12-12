<template>
 <nav class="navbar navbar-expand-lg fixed-top nb">
    <div class="container-fluid">
      <router-link to="/Home" class="navbar-brand me-auto" aria-current="page">
        <img class="imgt" src="../../public/logo/Logo.png" alt="Logo" />
      </router-link>
      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-body">
          <div class="navbar-nav justify-content-center flex-grow-1 pe-3">
            <li class="nav-item">
              <router-link to="/Home" class="nav-link mx-lg-2" aria-current="page">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/Classes" class="nav-link mx-lg-2" aria-current="page">Clases</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/Events" class="nav-link mx-lg-2" aria-current="page">Eventos</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/Report" class="nav-link mx-lg-2" aria-current="page">Reportes</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/Notifications" class="nav-link mx-lg-2" aria-current="page">Notificaciones</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/Roles" class="nav-link mx-lg-2" aria-current="page">Alumnos - Roles</router-link>
            </li>
          </div>
        </div>
      </div>
      <a href="Perfil.html" class="icon">
        <ion-icon name="person-circle-outline"></ion-icon>
      </a>
      <!-- <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button> -->
    </div>
  </nav>
</template>

<script>
  export default{
    name: "NavBar"
  }
</script>

<style scoped>
/* Estilos específicos del navbar */
.nb {
  background: repeating-linear-gradient(#5f2f9a, #b269cd);
  left: 0;
  top: 0;
  width: 100%;
  position: fixed;
  z-index: 4;
}

.container-fluid{
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.imgt {
  width: 110px;
  height: 50px;
  margin: 10px 10px;
}

.navbar-toggler {
  border: none;
  font-size: 1.25rem;
}

.navbar-nav{
  list-style: none;
  display: flex;
  gap: 30px;
}

router-link{
  text-decoration: none;
  color: rgb(0, 0, 0);
  font-weight: 500;
  position: relative;
}

a{
  text-decoration: none;
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

  .icon{
    color: rgb(255, 255, 255);
    font-size: 50px;
    display: inline-block;
    margin: 10px 10px;
    transition: 0.5s;
  }
}
</style>
