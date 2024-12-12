<template>
    <body>
        <NavBar />
        <div class="container">
            <h2>Programar Clases</h2>
            <div class="container-table">
                <table class="table">
                    <thead>
                        <tr>
                            <th>Profesor</th>
                            <th>Sede</th>
                            <th>Fecha</th>
                            <th>Hora</th>
                            <th>Clase</th>
                            <th>Dificultad</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Miguel Angel Ayala Roncancio</td>
                            <td>Bogota</td>
                            <td>22/04/2024</td>
                            <td>12:30</td>
                            <td>Bachata</td>
                            <td>Dificil</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="buttons">
                <button>Programar</button>
                <button>Eliminar</button>
                <button>Editar</button>
                <button>Información</button>
            </div>
        </div>   
        <Footer/>
    </body>
</template>

<script>
import NavBar from '../../components/NavBarComponent.vue'
import Footer from '../../components/FooterComponent.vue'

export default {
    components: {
        NavBar,
        Footer,
    },              
};  
</script>

<style scoped>
@import '../../assets/styles/ClassView';
.container{
    flex: 1;
}
</style>