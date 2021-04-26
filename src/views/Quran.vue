<template>
  <div class="quran mt-5">
    <div class="row mb-4">
      <div class="col">
        <div class="form-group">
          <input
            v-model="search"
            type="text"
            class="form-control"
            placeholder="Cari Surah..."
            @keyup="getSuratNumberByName(search)"
          />
        </div>
      </div>
    </div>
    <div v-if="data_search">
      <div class="row row-cols-1 row-cols-md-3">
        <div class="col mb-4" v-for="surah in data_search" :key="surah.number">
          <router-link :to="'/quran/' + surah.number" class="surah-detail">
            <CardSurah :surah="surah" />
          </router-link>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="row row-cols-1 row-cols-md-3">
        <div class="col mb-4" v-for="surah in data_surah" :key="surah.number">
          <router-link :to="'/quran/' + surah.number" class="surah-detail">
            <CardSurah :surah="surah" />
          </router-link>
        </div>
      </div>
    </div>
    <div id="top">
      <a href="#atas"><b-icon-arrow-up></b-icon-arrow-up></a>
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
      search: "",
      data_search: null,
    };
  },
  methods: {
    getSurah(data) {
      this.data_surah = data;
    },
    getSuratNumberByName(surahName) {
      const surahFilter = this.data_surah.filter((item) =>
        item.name.transliteration.id.includes(surahName)
      );

      try {
        if (!surahFilter) {
          return this.data_surah;
        } else {
          this.data_search = surahFilter;
          return this.data_search;
        }
      } catch (error) {
        console.log(error);
      }
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