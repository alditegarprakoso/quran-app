<template>
  <div class="prayer-times mt-5">
    <div class="row mb-4">
      <div class="col">
        <div class="form-group">
          <input
            list="daerah-list"
            v-model="search"
            type="text"
            class="form-control"
            placeholder="Ketik atau pilih daerah..."
            @change="handleSelection"
          />
          <datalist id="daerah-list">
            <option v-for="kota in list_kota" :key="kota.id" :value="kota.lokasi"></option>
          </datalist>
        </div>
      </div>
    </div>

    <div class="row text-center mb-3" v-if="jadwal_sholat">
      <div class="col-12 mb-3">
        <h5>Jadwal Sholat Daerah</h5>
      </div>
      <div class="col-12">
        <h4>{{ jadwal_sholat.lokasi }}</h4>
      </div>
      <div class="col-12">
        <h5>{{ jadwal_sholat.jadwal.tanggal }}</h5>
      </div>
    </div>

    <div class="row text-center justify-content-center mb-5" v-if="jadwal_sholat">
      <div class="col-md-2">
        <table class="table table-striped">
          <tbody>
            <tr>
              <td>Imsak</td>
              <td>{{ jadwal_sholat.jadwal.imsak }}</td>
            </tr>
            <tr>
              <td>Subuh</td>
              <td>{{ jadwal_sholat.jadwal.subuh }}</td>
            </tr>
            <tr>
              <td>Dzuhur</td>
              <td>{{ jadwal_sholat.jadwal.dzuhur }}</td>
            </tr>
            <tr>
              <td>Ashar</td>
              <td>{{ jadwal_sholat.jadwal.ashar }}</td>
            </tr>
            <tr>
              <td>Maghrib</td>
              <td>{{ jadwal_sholat.jadwal.maghrib }}</td>
            </tr>
            <tr>
              <td>Isya</td>
              <td>{{ jadwal_sholat.jadwal.isya }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PrayerTimes",
  data() {
    return {
      list_kota: [],
      jadwal_sholat: null,
      search: "",
    };
  },
  methods: {
    getKota(data) {
      this.list_kota = data;
    },
    handleSelection() {
      const selectedKota = this.list_kota.find(
        (kota) => kota.lokasi.toUpperCase() === this.search.toUpperCase()
      );
      if (selectedKota) {
        this.getJadwal(selectedKota.id);
      } else {
        this.jadwal_sholat = null;
      }
    },
    getJadwal(id) {
      let date = new Date();
      let year = date.getFullYear();
      let month = String(date.getMonth() + 1).padStart(2, '0');
      let day = String(date.getDate()).padStart(2, '0');
      
      axios
        .get(
          `https://api.myquran.com/v2/sholat/jadwal/${id}/${year}/${month}/${day}`
        )
        .then((response) => {
          this.jadwal_sholat = response.data.data;
        })
        .catch((error) => console.log("Gagal : ", error));
    },
  },
  mounted() {
    axios
      .get("https://api.myquran.com/v2/sholat/kota/semua")
      .then((response) => this.getKota(response.data.data))
      .catch((error) => console.log("Gagal : ", error));
  },
};
</script>

<style>
</style>