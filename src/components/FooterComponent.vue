<template>
  <br><br><br>
  <footer class="footer mt-auto py-3">
    <div class="container text-center">
      <p>&copy; 2024 Escuela de Baile. Todos los derechos reservados.</p>
      <ul class="list-inline">
        <li class="list-inline-item">
          <a href="https://www.facebook.com" target="_blank" class="text-decoration-none">Facebook</a>
        </li>
        <li class="list-inline-item">
          <a href="https://www.instagram.com" target="_blank" class="text-decoration-none">Instagram</a>
        </li>
        <li class="list-inline-item">
          <a href="https://www.twitter.com" target="_blank" class="text-decoration-none">Twitter</a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script setup>
// No se necesita lógica específica para el footer
</script>

<style scoped>
.footer {
  background-color: #5f2f9a;
  color: #ffffff;
}

.footer p {
  margin: 0;
}

.list-inline-item a {
  color: #ffffff;
  margin: 0 10px;
}

.list-inline-item a:hover {
  text-decoration: underline;
}
</style>
