<template>
  <div class="card h-100 shadow-sm">
    <div class="card-body surah">
      <div class="row text-center mb-2">
        <div class="col-2" style="font-weight: bold">
          {{ surah.number }}
        </div>
        <div class="col-6 text-left" style="font-weight: bold">
          {{ surah.name.transliteration.id }}
        </div>
        <div class="col-4 arabic" style="font-weight: bold">
          {{ surah.name.short }}
        </div>
      </div>
      <div class="row">
        <div class="col-2"></div>
        <div class="col-8">
          {{ surah.numberOfVerses }} Ayat | {{ surah.revelation.id }}
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