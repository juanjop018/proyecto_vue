<template>
    <div>
      <!-- Barra de navegación -->
      <header>
            <NavBar />
    </header>
  
      <!-- Contenido principal -->
      <div class="container mt-5 pt-5">
        <div class="row">
          <!-- Calificación de Estudiantes -->
          <div class="col-md-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Calificación de Estudiantes</h5>
                <p>Estudiante: <span>{{ studentInfo.name }}</span></p>
                <p>Clase a Calificar: <span>{{ studentInfo.class }}</span></p>
                <p>Calificación: <span>{{ studentInfo.grade }}</span></p>
                <p>Observación a Mejorar: <span>{{ studentInfo.obs }}</span></p>
                <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editModal">Editar</button>
              </div>
            </div>
          </div>
  
          <!-- Novedades del Sistema -->
          <div class="col-md-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Novedades del sistema</h5>
                <p>Hay un nuevo Evento</p>
                <p>Se registró un alumno en tu clase de Salsa</p>
                <p>Tu clase tiene el mejor promedio de la academia</p>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Tabla de Asistencia -->
        <div class="row mt-4">
          <div class="col-md-12">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Años</th>
                  <th>Clase</th>
                  <th>Asistencia</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(student, index) in students" :key="index">
                  <td>{{ student.name }}</td>
                  <td>{{ student.age }}</td>
                  <td>{{ student.class }}</td>
                  <td>
                    <input type="checkbox" class="attendance-toggle" v-model="student.attended" @change="toggleAttendance(student)" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
  
      <!-- Modal para Editar -->
      <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModalLabel">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="editModalLabel">Editar Calificación</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
                <footer>
            <FooterBar /> 
        </footer>
    </div>
            </div>
          </div>
        </div>
      </div>
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
      const studentInfo = ref({
        name: "Miguel Ángel",
        class: "Salsa",
        grade: "4.0",
        obs: "Lorem ipsum dolor sit amet...",
      });
  
      const students = ref([
        { name: "Juan", age: 50, class: "Merengue", attended: false },
        { name: "Pedro", age: 38, class: "Merengue", attended: true },
      ]);
  
      const editForm = ref({ ...studentInfo.value });
  
      const saveEdit = () => {
        studentInfo.value = { ...editForm.value };
        bootstrap.Modal.getInstance(document.getElementById("editModal"))?.hide();
      };
  
      const toggleAttendance = (student: typeof students.value[0]) => {
        console.log(`Asistencia de ${student.name}: ${student.attended ? "Presente" : "Ausente"}`);
      };
  
      return { studentInfo, students, editForm, saveEdit, toggleAttendance };
    },
  });
  </script>
  
  <style scoped>
  /* Personaliza tus estilos aquí */
  </style>
  