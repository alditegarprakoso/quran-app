<template>
  <div class="card h-100 shadow-sm">
    <div class="card-body">
      <div class="row text-center">
        <div class="col-2" style="font-weight: bold">
          {{ surah.nomor }}
        </div>
        <div class="col-6 text-left" style="font-weight: bold">
          {{ surah.namaLatin }}
        </div>
        <div class="col-4 arabic" style="font-weight: bold">
          {{ surah.nama }}
        </div>
      </div>
      <div class="row mb-2">
        <div class="col-2"></div>
        <div class="col-8">
          {{ surah.arti }}
        </div>
      </div>
      <div class="row">
        <div class="col-2"></div>
        <div class="col-8">
          {{ surah.jumlahAyat }} Ayat | {{ surah.tempatTurun }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardSurah",
  props: ["surah"],
};
</script>

<style>
</style>