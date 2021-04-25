<template>
  <div class="container">
    <b-navbar toggleable="lg" type="light" variant="light" class="rounded mt-3">
      <b-navbar-brand class="menu-item">Al-Qur'an Digital</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item
            ><router-link
              to="/"
              class="menu-item"
              style="color: #00917c !important"
              >Home</router-link
            ></b-nav-item
          >
          <b-nav-item
            ><router-link to="/about" class="menu-item"
              >Al-Qur'an</router-link
            ></b-nav-item
          >
          <b-nav-item
            ><router-link to="/about" class="menu-item"
              >Prayer times</router-link
            ></b-nav-item
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>