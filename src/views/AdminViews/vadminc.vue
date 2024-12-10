<template>
    <body>
        <nav class="navbar navbar-expand-lg fixed-top nb">
        <div class="container-fluid">
            <a class="navbar-brand me-auto" href="Connection.html">
            <img class="imgt" src="@/assets/icons/logo.png" alt="Logo" />
            </a>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                <img src="@/assets/icons/logo.png" alt="Logo" />
                </h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <ul class="navbar-nav justify-content-center flex-grow-1 pe-3">
                <li class="nav-item" v-for="(link, index) in navLinks" :key="index">
                    <a class="nav-link mx-lg-2" :href="link.href">{{ link.name }}</a>
                </li>
                </ul>
            </div>
            </div>
            <a href="Perfil.html" class="icon iconp">
            <ion-icon name="person-circle-outline"></ion-icon>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span class="navbar-toggler-icon"></span>
            </button>
        </div>
        </nav>
    </body>
</template>

<script setup>
import { ref } from 'vue';

const navLinks = ref([
  { name: 'Home', href: 'Connection.html' },
  { name: 'Clases', href: 'ClassProgramingAdmin.html' },
  { name: 'Eventos', href: 'Events.html' },
  { name: 'Reportes', href: 'Report.html' },
  { name: 'Notificaciones', href: 'Notificacion.html' },
  { name: 'Administración de Roles', href: 'StudentAdmission.html' },
  
]);
</script>