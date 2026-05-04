<template>
  <div class="prayer-times mt-5">
    <div class="row">
      <div class="col">
        <div class="form-group">
          <input
            v-model="search"
            type="text"
            class="form-control"
            placeholder="Cari Kota..."
            @keyup="filterKota(search)"
          />
        </div>
      </div>
    </div>
    <div class="row mb-4">
      <div class="col">
        <div class="form-group">
          <div v-if="!pilih_kota">
            <select
              class="form-control"
              v-model="selected"
              @change="getJadwal()"
            >
              <option disabled selected value="">Pilih Daerah</option>
              <option v-for="kota in list_kota" :key="kota.id" :value="kota.id">
                {{ kota.lokasi }}
              </option>
            </select>
          </div>
          <div v-else>
            <select
              class="form-control"
              v-model="selected"
              @change="getJadwal()"
            >
              <option disabled selected value="">Pilih Daerah</option>
              <option
                v-for="kota in pilih_kota"
                :key="kota.id"
                :value="kota.id"
              >
                {{ kota.lokasi }}
              </option>
            </select>
          </div>
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
      pilih_kota: null,
      jadwal_sholat: null,
      selected: "",
      search: "",
    };
  },
  methods: {
    getKota(data) {
      this.list_kota = data;
    },
    getJadwal() {
      if (!this.selected) return;
      
      let date = new Date();
      let year = date.getFullYear();
      let month = String(date.getMonth() + 1).padStart(2, '0');
      let day = String(date.getDate()).padStart(2, '0');
      
      axios
        .get(
          `https://api.myquran.com/v2/sholat/jadwal/${this.selected}/${year}/${month}/${day}`
        )
        .then((response) => {
          this.jadwal_sholat = response.data.data;
        })
        .catch((error) => console.log("Gagal : ", error));
    },
    filterKota(nama_kota) {
      if (!nama_kota) {
        this.pilih_kota = null;
        return;
      }
      const filterKota = this.list_kota.filter((item) =>
        item.lokasi.includes(nama_kota.toUpperCase())
      );

      this.pilih_kota = filterKota;
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