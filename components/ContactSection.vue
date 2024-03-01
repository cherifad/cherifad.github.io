<template>
  <div class="mt-16">
    <SectionHeader :title="$t('Section.Contact.Title')" :description="$t('Section.Contact.Description')" />
    <form class="lg:flex-row flex-col-reverse	flex gap-8">
      <div class="lg:w-8/12">
        <Input :label="$t('Section.Contact.Form.Name')" type="text" :isBlack="true"
          :placeholder="$t('Section.Contact.Form.Name.Placeholder')" />
        <Input :label="$t('Section.Contact.Form.Email')" type="email" :isBlack="true"
          :placeholder="$t('Section.Contact.Form.Email.Placeholder')" />
        <Input :label="$t('Section.Contact.Form.Message')" type="textarea" :isBlack="true"
          :placeholder="$t('Section.Contact.Form.Message.Placeholder')" />
        <Button class="lg:hidden w-full mt-8" :text="$t('Section.Contact.Form.Submit')" :isBlack="false"
          icon="material-symbols:send-outline" transition="right" />
      </div>
      <div class="flex flex-col gap-4 justify-between flex-1">
        <div>
          <div class="flex flex-col gap-4 text-[#969696] text-2xl">
            <div class="flex items-center gap-8 border-b-2 border-[#555555] pb-4 w-full">
              <Icon name="material-symbols:call" />
              <span><a href="tel:0033652385065">06 00 00 00 00</a></span>
            </div>
            <div class="flex items-center gap-8 border-b-2 border-[#555555] pb-4 w-full">
              <Icon name="material-symbols-light:alternate-email" />
              <span><a href="mailto:a.fr@gmx.com" target="_blank">fffff</a></span>
            </div>
          </div>
        </div>
        <Button class="w-fit hidden lg:block" :text="$t('Section.Contact.Form.Submit')" :isBlack="false"
          icon="material-symbols:send-outline" transition="right" />
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import Input from "@/components/common/Input.vue";
import Button from "@/components/common/Button.vue";

</script>