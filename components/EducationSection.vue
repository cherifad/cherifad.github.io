<template>
  <div class="mt-16 flex flex-col gap-8">
    <SectionHeader :title="$t('Section.Education.Title')" :description="$t('Section.Education.Description')" />
    <EducationCard v-for="(education, index) in $tm('SectionEducationList')" :key="index" :title="$rt(education.Title)"
      :year="$rt(education.Year)" :place="$rt(education.Place)" :placeUrl="education.PlaceUrl ? $rt(education.PlaceUrl) : null"
      :keysInformations="education.KeysInformations.map(info => $rt(info))" />
  </div>
</template>
  
<script setup>
</script>