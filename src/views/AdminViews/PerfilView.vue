<template>
    <header>
            <NavBar />
    </header>
    <div>
      <section class="container mt-4">
        <div class="row">
          <div class="col-md-3">
            <img src="../../../PUBLIC/ASSETS/img/user.jpg" alt="Foto de Perfil" class="img-thumbnail" />
            <input type="file" class="form-control mt-2" id="upload-profile-image" />
          </div>
          <div class="col-md-9">
            <h2>Perfil del Administrador</h2>
            <form id="admin-info-form">
              <div class="mb-3">
                <label for="nombre" class="form-label">Nombre:</label>
                <input type="text" class="form-control" id="nombre" v-model="nombre" />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Correo Electrónico:</label>
                <input type="email" class="form-control" id="email" v-model="email" />
              </div>
              <div class="mb-3">
                <label for="telefono" class="form-label">Teléfono:</label>
                <input type="tel" class="form-control" id="telefono" v-model="telefono" />
              </div>
              <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <button type="button" class="btn btn-primary" @click="guardarCambios('admin')">Guardar Cambios</button>
                <a href="../../../PUBLIC/Login.html" class="btn btn-primary" id="cerrarCuenta">Cerrar sesión</a>
              </div>
            </form>
          </div>
        </div>
        <div class="mt-4">
          <div class="row">
            <div class="col-md-2"></div>
            <div v-for="(card, index) in cards" :key="index" class="col-md-2">
              <div class="card">
                <img :src="card.img" class="card-img-top" :alt="card.title" />
                <div class="card-body">
                  <h5 class="card-title">{{ card.title }}</h5>
                  <a :href="card.link" class="btn btn-primary">Ver más</a>
                </div>
              </div>
            </div>
            <div class="col-md-2"></div>
          </div>
        </div>
      </section>
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
<script>
import { ref, onMounted } from 'vue';
import Pikaday from 'pikaday';
import 'pikaday/css/pikaday.css';

export default {
  setup() {
    const datepickerInput = ref<HTMLInputElement | null>(null);
    const selectedDate = ref<string | null>(null);
    const selectedClass = ref<string | null>(null);
    const customMessage = ref('');
    const sendToTeacher = ref(false);
    const modalMessage = ref('');
    
    const classData = {
      '15/09/2024': ['Clase de Salsa', 'Clase de Bachata'],
      '20/09/2024': ['Clase de Tango', 'Clase de Merengue'],
      '25/09/2024': ['Clase de Hip-Hop', 'Clase de Ballet'],
    };

    const classOptions = ref<string[]>([]);

    const loadClasses = (date: string) => {
      if (classData[date]) {
        classOptions.value = classData[date];
      } else {
        classOptions.value = [];
        alert('No hay clases programadas para esta fecha.');
      }
    };

    const sendNotification = (message: string) => {
      if (!selectedDate.value) {
        alert('Por favor, seleccione una fecha antes de enviar.');
        return;
      }
      if (!selectedClass.value) {
        alert('Por favor, seleccione una clase para enviar la notificación.');
        return;
      }
      modalMessage.value = `Mensaje enviado: ${message}\nClase: ${selectedClass.value}\nFecha: ${selectedDate.value}`;
      new bootstrap.Modal(document.getElementById('notificationModal')).show();
    };

    const sendCustomNotification = () => {
      if (!selectedDate.value) {
        alert('Por favor, seleccione una fecha antes de enviar.');
        return;
      }
      if (!selectedClass.value) {
        alert('Por favor, seleccione una clase para enviar la notificación.');
        return;
      }
      if (customMessage.value.trim() === '') {
        alert('Por favor, escribe un mensaje antes de enviar.');
        return;
      }
      let message = `Notificación personalizada enviada: ${customMessage.value}.`;
      if (sendToTeacher.value) {
        message += ' También fue enviada al maestro.';
      }
      modalMessage.value = `Mensaje enviado: ${message}\nClase: ${selectedClass.value}\nFecha: ${selectedDate.value}`;
      new bootstrap.Modal(document.getElementById('notificationModal')).show();
    };

    onMounted(() => {
      new Pikaday({
        field: datepickerInput.value!,
        format: 'DD/MM/YYYY',
        toString(date) {
          const day = date.getDate().toString().padStart(2, '0');
          const month = (date.getMonth() + 1).toString().padStart(2, '0');
          const year = date.getFullYear();
          return `${day}/${month}/${year}`;
        },
        onSelect(date) {
          selectedDate.value = date.toISOString().slice(0, 10);
          loadClasses(selectedDate.value);
        },
      });
    });

    return {
      datepickerInput,
      selectedDate,
      selectedClass,
      customMessage,
      sendToTeacher,
      modalMessage,
      classOptions,
      sendNotification,
      sendCustomNotification,
    };
  },
};
</script>
  <style scoped>
  @import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css');
  @import url('../../../PUBLIC/ASSETS/CSS/Perfil.css');
  @import url('../../../PUBLIC/ASSETS/CSS/STYLES.CSS');
  
  .footer {
    margin-top: 20px;
  }
  </style>
  