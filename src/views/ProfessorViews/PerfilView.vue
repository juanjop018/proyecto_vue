<template>
    <div>
      <!-- Barra de navegación -->
      <header>
            <NavBar />
    </header>
  
      <div class="container mt-4">
        <div class="row">
          <div class="col-md-3">
            <img :src="profile.image" alt="Foto de Perfil" class="img-thumbnail" />
            <input type="file" class="form-control mt-2" @change="updateProfileImage" />
          </div>
          <div class="col-md-9">
            <h2>Perfil del Profesor</h2>
            <form @submit.prevent="saveChanges">
              <div class="mb-3">
                <label for="nombre" class="form-label">Nombre:</label>
                <input v-model="profile.name" type="text" class="form-control" id="nombre" />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Correo Electrónico:</label>
                <input v-model="profile.email" type="email" class="form-control" id="email" />
              </div>
              <div class="mb-3">
                <label for="telefono" class="form-label">Teléfono:</label>
                <input v-model="profile.phone" type="tel" class="form-control" id="telefono" />
              </div>
              <div class="mb-3">
                <label for="especialidad" class="form-label">Especialidad:</label>
                <input v-model="profile.specialty" type="text" class="form-control" id="especialidad" />
              </div>
              <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <button type="submit" class="btn btn-primary">Guardar Cambios</button>
                <router-link to="/login" class="btn btn-primary">Cerrar Sesión</router-link>
              </div>
            </form>
          </div>
        </div>
        <div class="mt-4">
          <h3>Clases Asignadas</h3>
          <ul class="list-group">
            <li class="list-group-item" v-for="(classItem, index) in classes" :key="index">
              {{ classItem }}
            </li>
          </ul>
        </div>
      </div>
  
      <!-- Footer -->
      <footer>
            <FooterBar /> 
        </footer>
    </div>
  </template>
  
  <script>
  import NavBar from '../../components/NavBar.vue';
  import FooterBar from '../../components/FooterBar.vue'
  export default {
  components: {
      NavBar,
      FooterBar,
  },              
};  

</script>
  <script lang="ts">
  import { defineComponent, ref } from "vue";
  
  export default defineComponent({
    setup() {
      const profile = ref({
        image: require("@/assets/img/user.jpg"), // Cambia esta ruta según tu configuración
        name: "Ana Perez",
        email: "ana@ejemplo.com",
        phone: "987654321",
        specialty: "Salsa",
      });
  
      const classes = ref([
        "Clase de Salsa - Lunes, 5 PM",
        "Clase de Bachata - Miércoles, 7 PM",
      ]);
  
      const socialIcons = [
        { name: "logo-youtube", link: "#" },
        { name: "logo-instagram", link: "#" },
        { name: "logo-tiktok", link: "#" },
        { name: "logo-facebook", link: "#" },
        { name: "logo-whatsapp", link: "#" },
      ];
  
      const footerMenu = ["Inicio", "Equipo", "Contacto", "Video"];
      const currentYear = new Date().getFullYear();
  
      const saveChanges = () => {
        alert("Cambios guardados correctamente.");
        console.log(profile.value);
      };
  
      const updateProfileImage = (event: Event) => {
        const target = event.target as HTMLInputElement;
        const file = target.files?.[0];
        if (file) {
          profile.value.image = URL.createObjectURL(file);
        }
      };
  
      return {
        profile,
        classes,
        socialIcons,
        footerMenu,
        currentYear,
        saveChanges,
        updateProfileImage,
      };
    },
  });
  </script>
  
  <style scoped>
  /* Personaliza tus estilos aquí */
  </style>
  