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
                {{ kota.nama }}
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
                {{ kota.nama }}
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>

    <div class="row text-center mb-3" v-if="kota">
      <div class="col-12 mb-3">
        <h5>Jadwal Sholat Daerah</h5>
      </div>
      <div class="col-12">
        <h4>{{ kota }}</h4>
      </div>
      <div class="col-12">
        <h5>{{ jadwal_sholat.jadwal.data.tanggal }}</h5>
      </div>
    </div>

    <div class="row text-center justify-content-center mb-5" v-if="kota">
      <div class="col-md-2">
        <table class="table table-striped">
          <tbody>
            <tr>
              <td>Imsak</td>
              <td>{{ jadwal_sholat.jadwal.data.imsak }}</td>
            </tr>
            <tr>
              <td>Subuh</td>
              <td>{{ jadwal_sholat.jadwal.data.subuh }}</td>
            </tr>
            <tr>
              <td>Dzuhur</td>
              <td>{{ jadwal_sholat.jadwal.data.dzuhur }}</td>
            </tr>
            <tr>
              <td>Ashar</td>
              <td>{{ jadwal_sholat.jadwal.data.ashar }}</td>
            </tr>
            <tr>
              <td>Maghrib</td>
              <td>{{ jadwal_sholat.jadwal.data.maghrib }}</td>
            </tr>
            <tr>
              <td>Isya</td>
              <td>{{ jadwal_sholat.jadwal.data.isya }}</td>
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
      list_kota: null,
      pilih_kota: null,
      jadwal_sholat: null,
      selected: null,
      kota: null,
      search: null,
    };
  },
  methods: {
    getKota(data) {
      this.list_kota = data;
    },
    getJadwal() {
      let d = new Date().toJSON().slice(0, 10).replace(/-/g, "-");
      axios
        .get(
          `https://api.banghasan.com/sholat/format/json/jadwal/kota/${this.selected}/tanggal/${d}`
        )
        .then((response) => {
          this.jadwal_sholat = response.data;
          axios
            .get(
              "https://api.banghasan.com/sholat/format/json/kota/kode/" +
                this.jadwal_sholat.query.kota
            )
            .then((response) => {
              response.data.kota.forEach((element) => {
                this.kota = element.nama;
              });
            })
            .catch((error) => console.log("Gagal : ", error));
        })
        .catch((error) => console.log("Gagal : ", error));
    },
    filterKota(nama_kota) {
      const filterKota = this.list_kota.filter((item) =>
        item.nama.includes(nama_kota.toUpperCase())
      );

      try {
        if (!filterKota) {
          return this.list_kota;
        } else {
          this.pilih_kota = filterKota;
          return this.pilih_kota;
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    axios
      .get("https://api.banghasan.com/sholat/format/json/kota")
      .then((response) => this.getKota(response.data.kota))
      .catch((error) => console.log("Gagal : ", error));
  },
};
</script>

<style>
</style>