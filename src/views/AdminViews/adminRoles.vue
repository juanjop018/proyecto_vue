<template>
  <body class="body-roles">
    <NavBar />
    <div class="roles-content">
      <h2 class="text-center">Gestión de Alumnos</h2>
      <div class="nuevo-alumno">
        <button class="" @click="nuevo">Nuevo Alumno</button>
      </div>
      <div class="table-responsive">
        <table class="table table-striped table-bordered">
          <thead class="thead-dark">
            <tr>
              <th>Nombre</th>
              <th>Nota</th>
              <th>Profesor</th>
              <th>Clase</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(alumno, index) in alumnos" :key="index">
              <td>{{ alumno.nombre }}</td>
              <td>{{ alumno.nota }}</td>
              <td>{{ alumno.profesor }}</td>
              <td>{{ alumno.clase }}</td>
              <td>{{ alumno.estado }}</td>
              <td class="acciones">
                <button @click="ver(index)">Ver</button>
                <button @click="editar(index)">Editar</button>
                <button @click="eliminar(index)">Eliminar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
  
      <div v-if="modal" class="modal-overlay">
        <div class="modal-content">
          <h5>{{ fila !== null ? 'Editar Alumno' : 'Nuevo Alumno' }}</h5>
          <form @submit.prevent="guardar">
            <div class="form-group">
              <label for="nombre">Nombre</label>
              <input type="text" class="form-control" id="nombre" v-model="form.nombre" required/>
            </div>
            <div class="form-group">
              <label for="nota">Nota</label>
              <input type="text" class="form-control" id="nota" v-model="form.nota" required/>
            </div>
            <div class="form-group">
              <label for="profesor">Profesor</label>
              <input type="text" class="form-control" id="profesor" v-model="form.profesor" required/>
            </div>
            <div class="form-group">
              <label for="clase">Clase</label>
              <input type="text" class="form-control" id="clase" v-model="form.clase" required/>
            </div>
            <div class="form-group">
              <label for="estado">Estado</label>
              <input type="text" class="form-control" id="estado" v-model="form.estado" required/>
            </div>
            <div class="new-edit-button">
              <button type="submit">Guardar</button>
              <button type="button"@click="cerrar">Cerrar</button>
            </div>
          </form>
        </div>
      </div>

      <div v-if="modalVer" class="modal-overlay">
        <div class="modal-content">
          <h5>Detalles del Alumno</h5>
          <ul>
            <li><strong>Nombre:</strong> {{ detalle.nombre }}</li>
            <li><strong>Nota:</strong> {{ detalle.nota }}</li>
            <li><strong>Profesor:</strong> {{ detalle.profesor }}</li>
            <li><strong>Clase:</strong> {{ detalle.clase }}</li>
            <li><strong>Estado:</strong> {{ detalle.estado }}</li>
          </ul>
          <button @click="cerrarVisualizacion">Cerrar</button>
        </div>
      </div>
    </div>
    <Footer />
    
  </body>
</template>

<script>
import { ref } from "vue";
import NavBar from "@/components/NavBArComponent.vue"
import Footer from "@/components/FooterComponent.vue"

export default {
  components: {
    NavBar,
    Footer
  },
  setup() {
    const alumnos = ref([
      { nombre: "Juan Pérez", nota: "8", profesor: "Mr. Smith", clase: "Bachata", estado: "Activo" },
      { nombre: "Esteban Vargas", nota: "5", profesor: "Mr. Lookman", clase: "Salsa", estado: "Activo" },
      { nombre: "Lina Rojas", nota: "8", profesor: "Mr. Smith", clase: "Bachata", estado: "Activo" },
      { nombre: "Ana García", nota: "9", profesor: "Mrs. Johnson", clase: "Merengue", estado: "Activo" },
    ]);

    const form = ref({ nombre: "", nota: "", profesor: "", clase: "", estado: "" });
    const fila = ref(null);
    const modal = ref(false);
    const modalVer = ref(false);
    const detalle = ref({});

    const editar = (index) => {
      fila.value = index;
      form.value = { ...alumnos.value[index] };
      modal.value = true;
    };

    const eliminar = (index) => {
      alumnos.value.splice(index, 1);
    };

    const ver = (index) => {
      detalle.value = { ...alumnos.value[index] };
      modalVer.value = true;
    };
    
    const guardar = () => {
      if (fila.value !== null) {
        alumnos.value[fila.value] = {...form.value};
      } else{
        alumnos.value.push({...form.value})
      }
      cerrar();
    };
    
    const cerrar = () => {
      modal.value = false;
      form.value = { nombre: "", nota: "", profesor: "", clase: "", estado: "" };
      fila.value = null;
    };
    
    const nuevo = () => {
      fila.value = null;
      form.value = { nombre: "", nota: "", profesor: "", clase: "", estado: "" };
      modal.value = true;
    };
    
    const cerrarVisualizacion = () => {
      modalVer.value = false;
      detalle.value = {};
    };
    
    return {
      alumnos,
      form,
      modal,
      editar,
      guardar,
      eliminar,
      cerrar,
      nuevo,
      ver,
      modalVer,
      detalle,
      cerrarVisualizacion
    };
  },
};
</script>

<style>
.body-roles{
        background: linear-gradient(317deg, #5f2f9a, #076a81, #b269cd);
        display: flex;
        flex-direction: column;
        height: 100vh;
    }

    .roles-content{
        flex: 1;
        padding: 120px 0 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
      
    .roles-content h2{
      font-size: 2rem;
      color: rgb(255, 255, 255);
    }

    .nuevo-alumno{
      margin: 10px 0 20px;
    }

    .table-responsive{
    border: 2px solid #5f2f9a;
    background-color: white;
    border-radius: 15px;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    }

    .table-responsive th{
      background-color: #076a81;
      color: #000;
    }

    .acciones{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-evenly;
    }

    button{
      padding: 10px 0;
      width: 140px;
      border-radius: 10px;
      background-color: #5f2f9a;
      color: white;
      border: solid 1px transparent;
    }

    button:hover{
      background-color: #b269cd;
      border: solid 1px #2b2b2b;
    }

.modal-overlay {
  z-index: 4;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-content{
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  padding: 20px;
  border-radius: 5px;
  width: 400px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  gap: 20px;
}

.new-edit-button{
  display: flex;
  margin-top: 30px;
  gap: 20px;
}
</style>
