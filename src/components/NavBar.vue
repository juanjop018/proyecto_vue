<template>   
    <header class="header">
        <div class="logo">
            <img :src="logoSrc" alt="logo">
        </div>
        <nav>
            <ul class="nav-link">
                <li v-for="(link, index) in navLinks" :key="index">
                    <a :href="link.href">{{ link.name }}</a>
                </li>
            </ul>
        </nav>
        <div class="side-buttons">
            <a href="" class="profile">
                <button><ion-icon name="person-circle-outline"></ion-icon></button>
            </a>          
            <button class="menu" @click="AlternateToggle"><ion-icon name="menu-outline"></ion-icon></button>
        </div>
    </header>
    <div class="dropdown-menu" ref="dropdown_menu">
        <nav>
            <ul class="dropdown-menu-link">
                <button class="close" @click="AlternateToggle"><ion-icon name="close-outline"></ion-icon></button>
                <li v-for="(link, index) in navLinks" :key="index">
                    <a :href="link.href">{{ link.name }}</a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
import Logo from '../assets/icons/logo.png'
import { ref } from 'vue';
export default {
    data() {
        return {
            logoSrc: Logo,
        };
    },
    setup() {
        const navLinks = ref([
            {name: 'Home', href: '/AdministratorPage'},
            {name: 'Clases', href: '/Classes'},
            {name: 'Eventos', href: ''},
            {name: 'Reportes', href: ''},
            {name: 'Administración de roles', href: ''},   
        ]);
        return {navLinks};
    },
    name: 'NavBar',
    methods: {
        AlternateToggle(){
            var inputs = document.querySelectorAll("input");
            inputs.forEach(function (input){
                input.value = "";
            });
            this.$refs.dropdown_menu.classList.toggle("toggle");
        }
    }
}
</script>

<style scoped>
@import '../../src/assets/styles/NavBar.css';
</style>