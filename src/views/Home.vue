<template>
  <div class="home">
    <!-- Hero Section for Desktop Display -->
    <div class="d-none d-md-block mt-5">
      <div class="row align-items-center text-center">
        <div class="col-md-5">
          <h3 class="mb-4" style="font-weight: 700">
            Tenangkan hatimu dengan membaca Al-Qur'an
          </h3>
          <p style="font-weight: 500">
            “(yaitu) orang-orang yang beriman dan hati mereka manjadi tenteram
            dengan mengingat Allah. Ingatlah, hanya dengan mengingati Allah-lah
            hati menjadi tenteram.” (QS. Ar-Ra’d: 28)
          </p>
          <router-link to="/quran" class="btn btn-hero btn-sm"
            >Baca Al-Qur'an</router-link
          >
        </div>
        <div class="col-md-7">
          <img loading="lazy" draggable="false" alt="Hero Image" src="../assets/img/hero.jpg" width="550" />
        </div>
      </div>
    </div>
    <!-- Hero Section for Desktop Display -->

    <!-- Hero Section for Mobile Display -->
    <div class="d-sm-block d-md-none" style="margin-top: 20px">
      <div class="row align-items-center text-center">
        <div class="col-md-7">
          <img alt="Hero Image" src="../assets/img/hero.jpg" width="400" />
        </div>
        <div class="col-md-5">
          <h3 class="mb-4" style="font-weight: 700">
            Tenangkan hatimu dengan membaca Al-Qur'an
          </h3>
          <p style="font-weight: 500">
            “(yaitu) orang-orang yang beriman dan hati mereka manjadi tenteram
            dengan mengingat Allah. Ingatlah, hanya dengan mengingati Allah-lah
            hati menjadi tenteram.” (QS. Ar-Ra’d: 28)
          </p>
          <router-link to="/quran" class="btn btn-hero btn-sm"
            >Baca Al-Qur'an</router-link
          >
        </div>
      </div>
    </div>
    <!-- Hero Section for Mobile Display -->
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>
