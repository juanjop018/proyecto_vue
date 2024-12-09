<template>
    <body>
        <NavBar />
        <Footer />
    </body>
</template>

<script>
import NavBar from "@/components/NavBArComponent.vue"
import Footer from "@/components/FooterComponent.vue"
export default {
    components: {
        NavBar,
        Footer
    }
}
</script>

<style scoped>
    @import '../assets/styles/Main.css';
</style>