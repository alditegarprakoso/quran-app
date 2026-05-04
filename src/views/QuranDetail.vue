<template>
  <div class="quran-detail">
    <router-link to="/quran" class="btn btn-sm btn-outline-info mt-3 mb-3"
      >Back</router-link
    >

    <div class="row text-center mb-5" v-if="detail_surah.namaLatin">
      <div class="col-md-12" style="font-weight: 700">
        <h3>
          {{ detail_surah.namaLatin }} ({{
            detail_surah.arti
          }})
        </h3>
      </div>
      <div class="col-md-12">
        <p style="font-weight: 500">
          {{ detail_surah.jumlahAyat }} Ayat |
          {{ detail_surah.tempatTurun }}
        </p>
      </div>
    </div>

    <div class="row justify-content-center mb-5">
      <div class="col-md-10">
        <table class="table table-striped table-inverse table-responsive">
          <tbody>
            <tr v-for="surah in detail_surah.ayat" :key="surah.nomorAyat">
              <td>
                <div class="row mb-3">
                  <div class="col-2 arabic text-center">
                    <div
                      style="
                        width: 30px;
                        height: 30px;
                        border: 1.5px solid black;
                        border-radius: 50%;
                        font-weight: 700;
                      "
                    >
                      {{ surah.nomorAyat }}
                    </div>
                  </div>
                  <div
                    class="col-10 lh arabic text-right"
                    style="font-size: 25px"
                  >
                    {{ surah.teksArab }}
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    {{ surah.teksIndonesia }}
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div id="top">
      <a href="#atas"><b-icon-arrow-up></b-icon-arrow-up></a>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "QuranDetail",
  components: {},
  data() {
    return {
      detail_surah: {},
    };
  },
  mounted() {
    axios
      .get("https://equran.id/api/v2/surat/" + this.$route.params.id)
      .then((response) => (this.detail_surah = response.data.data))
      .catch((error) => console.log(error));
  },
};
</script>
