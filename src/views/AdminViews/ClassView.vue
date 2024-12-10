<template>
    <body>
        <header>
            <NavBar />
        </header>
        <div class="container">
            <h1>Programar Clases</h1>
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
        <footer>
            <FooterBar /> 
        </footer>   
    </body>
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

<style scoped>
@import '../../assets/styles/ClassView';
</style> 