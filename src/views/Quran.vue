<template>
  <div class="quran mt-5">
    <div class="row row-cols-1 row-cols-md-3">
      <div class="col mb-4" v-for="surah in data_surah" :key="surah.number">
        <router-link :to="'/quran/' + surah.number" class="surah-detail">
          <CardSurah :surah="surah" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import CardSurah from "@/components/CardSurah.vue";
import axios from "axios";

export default {
  name: "Quran",
  components: {
    CardSurah,
  },
  data() {
    return {
      data_surah: {},
    };
  },
  methods: {
    getSurah(data) {
      this.data_surah = data;
    },
  },
  mounted() {
    axios
      .get("https://api.quran.sutanlab.id/surah")
      .then((response) => this.getSurah(response.data.data))
      .catch((error) => console.log("Gagal : ", error));
  },
};
</script>