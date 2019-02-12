<template>

  <footer id="footer" class="footer-global">

    <div class="container text-center">

      <p class="footer-logo">
        <img src="/favicon.png">
      </p>

      <ul class="nav nav-footer justify-content-center">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link">About Us</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/products" class="nav-link">Our Products</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/privacy" class="nav-link">Privacy Policy</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/terms" class="nav-link">Terms &amp; Condition</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contact" class="nav-link">Contact Us</router-link>
        </li>
      </ul>

      <div class="copyright">
        Copyright &copy; <router-link to="/">Gameplay Interactive</router-link> 2018. All rights reserved.
      </div>

    </div>

  </footer>

</template>

<script>
export default {};
</script>
