<template>

    <body>
        <h1>DanceSheduler</h1>
        <div class="container" ref="container">
            <div class="container-form">
                <form class="sign-in" @submit.prevent="submitFormSignIn">
                    <h2>Iniciar Sesión</h2>
                    <div class="social-networks">
                        <a href="https://www.instagram.com/ln7dancestudio_/" target="_blank">
                            <ion-icon name="logo-instagram"></ion-icon>
                        </a>
                        <a href="https://www.facebook.com/ln7dancestudio" target="_blank">
                            <ion-icon name="logo-facebook"></ion-icon>
                        </a>
                        <a href="https://www.youtube.com/@ledersonleon8197" target="_blank">
                            <ion-icon name="logo-youtube"></ion-icon>
                        </a>
                        <a href="https://www.tiktok.com/@lnsietedancestudio_" target="_blank">
                            <ion-icon name="logo-tiktok"></ion-icon>
                        </a>
                    </div>
                    <div class="container-input">
                        <ion-icon name="mail"></ion-icon>
                        <input type="email" placeholder="Correo" v-model="LoginData.email" required>
                    </div>
                    <div class="container-input">
                        <ion-icon name="lock-closed-outline"></ion-icon>
                        <input type="password" placeholder="Contraseña" v-model="LoginData.password" required>
                    </div>
                    <a href="#">¿Olvidaste tu contraseña?</a>
                    <button class="button" type="submit">Iniciar Sesión</button>
                </form>
            </div>
            <div class="container-form" @submit.prevent="submitFormSignUp">
                <form class="sign-up">
                    <h2>Registrarse</h2>
                    <div class="social-networks">
                        <a href="https://www.instagram.com/ln7dancestudio_/" target="_blank">
                            <ion-icon name="logo-instagram"></ion-icon>
                        </a>
                        <a href="https://www.facebook.com/ln7dancestudio" target="_blank">
                            <ion-icon name="logo-facebook"></ion-icon>
                        </a>
                        <a href="https://www.youtube.com/@ledersonleon8197" target="_blank">
                            <ion-icon name="logo-youtube"></ion-icon>
                        </a>
                        <a href="https://www.tiktok.com/@lnsietedancestudio_" target="_blank">
                            <ion-icon name="logo-tiktok"></ion-icon>
                        </a>
                    </div>
                    <div class="container-input">
                        <ion-icon name="person-outline"></ion-icon>
                        <input type="text" placeholder="Nombres" v-model="RegisterData.name" required>
                    </div>
                    <div class="container-input">
                        <ion-icon name="person-outline"></ion-icon>
                        <input type="text" placeholder="Apellidos" v-model="RegisterData.surname" required>
                    </div>
                    <div class="container-input">
                        <ion-icon name="id-card-outline"></ion-icon>
                        <input type="number" placeholder="Numero de identificación"
                            v-model="RegisterData.identification" required>
                    </div>
                    <div class="container-input">
                        <ion-icon name="call-outline"></ion-icon>
                        <input type="number" placeholder="Telefono" v-model="RegisterData.phone" required>
                    </div>
                    <div class="container-input">
                        <ion-icon name="transgender-outline"></ion-icon>
                        <select v-model="RegisterData.gender" required>
                            <option disabled selected="">Genero</option>
                            <option>Masculino</option>
                            <option>Femenino</option>
                            <option>Otro</option>
                        </select>
                    </div>
                    <div class="container-input">
                        <ion-icon name="mail"></ion-icon>
                        <input type="email" placeholder="Correo" v-model="RegisterData.remail" required>
                    </div>
                    <div class="container-input">
                        <ion-icon name="lock-closed-outline"></ion-icon>
                        <input type="password" placeholder="Contraseña" v-model="RegisterData.rpassword" required>
                    </div>
                    <button class="button" type="submit">Registrarse</button>
                </form>
            </div>
            <div class="container-welcome">
                <div class="welcome-sign-up welcome">
                    <h3>Bienvenido</h3>
                    <p>Ingrese sus datos personales para usar todas las funciones del sitio</p>
                    <button @click="AlternateToggle" class="button">Registrarse</button>
                </div>
                <div class="welcome-sign-in welcome">
                    <h3>¡Hola!</h3>
                    <p>Registrarse con sus datos personales para usar todas las funciones del sitio</p>
                    <button @click="AlternateToggle" class="button">Iniciar Sesión</button>
                </div>
            </div>
        </div>
    </body>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            LoginData: {
                email: "",
                password: ""
            },
            RegisterData: {
                name: "",
                surname: "",
                identification: "",
                phone: "",
                gender: "",
                remail: "",
                rpassword: "",
                rol: "estudiante"
            }
        };
    },
    methods: {
        async submitFormSignIn() {
            try {
                const response = await axios.post("http://localhost/backend/Login.php", this.LoginData, {
                    headers: { "Content-Type": "application/json" }
                });
                if (response.data === "estudiante") {
                    this.$router.push('/StudentPage')
                } else if (response.data === "administrador") {
                    this.$router.push('/AdministratorPage')
                } else if (response.data === "profesor") {
                    this.$router.push('/ProfessorPage')
                } else if (response.data === "noresult") {
                    alert("Correo o contraseñas incorrectos...");
                }
            } catch (error) {
                console.error("Error al enviar los datos:", error);
            }
        },
        async submitFormSignUp() {
            try {
                const response = await axios.post("http://localhost/proyecto%20vue/backend/Register.php", this.RegisterData, {
                    headers: { "Content-Type": "application/json" }
                });
                this.RegisterData = {
                    name: "",
                    surname: "",
                    identification: "",
                    phone: "",
                    gender: "",
                    email: "",
                    password: "",
                };
            } catch (error) {
                console.error("Error al enviar los datos:", error);
            }
        },
        AlternateToggle() {
            var inputs = document.querySelectorAll("input");
            inputs.forEach(function (input) {
                input.value = "";
            });
            this.$refs.container.classList.toggle("toggle");
        }
    }
};
</script>

<style scoped>
@import '../assets/styles/LoginView.css';
</style>