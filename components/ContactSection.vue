<template>
  <div class="mt-16">
    <SectionHeader :title="$t('Section.Contact.Title')" :description="$t('Section.Contact.Description')" />
    <form class="lg:flex-row flex-col-reverse	flex gap-8" @submit="(e) => handleSubmit(e)">
      <div class="lg:w-8/12">
        <Input :label="$t('Section.Contact.Form.Name')" type="text" :isBlack="true" v-model="form.fromName"
          :placeholder="$t('Section.Contact.Form.Name.Placeholder')" />
        <Input :label="$t('Section.Contact.Form.Email')" type="email" :isBlack="true" v-model="form.fromEmail"
          :placeholder="$t('Section.Contact.Form.Email.Placeholder')" />
        <Input :label="$t('Section.Contact.Form.Message')" type="textarea" :isBlack="true" v-model="form.message"
          :placeholder="$t('Section.Contact.Form.Message.Placeholder')" />
        <div class="text-[#969696] lg:hidden mt-4">
          <p class="text-2xl flex items-center mb-4">
            <Icon name="material-symbols-light:robot-2" class="w-8 h-8" />
            {{ $t('Section.Contact.Form.Captcha') }}
          </p>
          <div class="flex items-center gap-4">
            <span>{{ captcha.number1 }}</span>
            <span>{{ captcha.randomMathOperation }}</span>
            <span>{{ captcha.number2 }}</span>
            <span>=</span>
            <Input type="text" :isBlack="true" v-model="form.userResult" />
          </div>
        </div>
        <Button class="lg:hidden w-full mt-8" :text="$t('Section.Contact.Form.Submit')" :isBlack="false"
          :disabled="buttonDisabled" icon="material-symbols:send-outline" transition="right" />
      </div>
      <div class="flex flex-col gap-4 justify-between flex-1">
        <div>
          <div class="flex flex-col gap-4 text-[#969696] text-2xl">
            <div class="flex items-center gap-8 border-b-2 border-[#555555] pb-4 w-full">
              <Icon name="material-symbols:call" />
              <span><a href="mailto:a.fr@gmx.com">+33 6 XX XX XX XX</a></span>
            </div>
            <div class="flex items-center gap-8 border-b-2 border-[#555555] pb-4 w-full">
              <Icon name="material-symbols-light:alternate-email" />
              <span><a href="mailto:a.fr@gmx.com" target="_blank">adlen.cherif@cpe.fr</a></span>
            </div>
          </div>
        </div>
        <div>
          <div class="text-[#969696] hidden lg:block">
            <p class="text-2xl flex items-center mb-4">
              <Icon name="material-symbols-light:robot-2" class="w-8 h-8" />
              {{ $t('Section.Contact.Form.Captcha') }}
            </p>
            <div class="flex items-center gap-4">
              <span>{{ captcha.number1 }}</span>
              <span>{{ captcha.randomMathOperation }}</span>
              <span>{{ captcha.number2 }}</span>
              <span>=</span>
              <Input type="text" :isBlack="true" v-model="form.userResult" />
            </div>
          </div>
          <Button class="hidden lg:block" :text="$t('Section.Contact.Form.Submit')" :isBlack="false"
            :disabled="buttonDisabled" icon="material-symbols:send-outline" transition="right" />
        </div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import Input from "@/components/common/Input.vue";
import Button from "@/components/common/Button.vue";

const captcha = ref({
  number1: 0,
  number2: 0,
  randomMathOperation: "",
});

const form = ref({
  fromName: "",
  fromEmail: "",
  message: "",
  userResult: "",
});

const formError = ref({
  fromName: false,
  fromEmail: false,
  message: false,
  userResult: false,
});

const buttonDisabled = ref(false);

const createRandomMathOperation = () => {
  const operations = ["+", "-", "*"];
  captcha.value.randomMathOperation = operations[Math.floor(Math.random() * operations.length)];
};

const createRandomNumbers = () => {
  captcha.value.number1 = Math.floor(Math.random() * 10);
  captcha.value.number2 = Math.floor(Math.random() * 10);
};

const checkMathOperation = () => {
  switch (captcha.value.randomMathOperation) {
    case "+":
      return captcha.value.number1 + captcha.value.number2;
    case "-":
      return captcha.value.number1 - captcha.value.number2;
    case "*":
      return captcha.value.number1 * captcha.value.number2;
  }
};

onMounted(() => {
  createRandomMathOperation();
  createRandomNumbers();
  checkForm();
});

const handleSubmit = (event: Event) => {
  event.preventDefault();

  if (buttonDisabled.value) return;

  // open href in new tab
  window.open(`mailto:adlen.cherif@cpe.fr?subject=Contact from ${form.value.fromName}&body=${form.value.message}`, "_blank");
};

const checkForm = () => {
  buttonDisabled.value = true;

  if (form.value.fromName == "") {
    formError.value.fromName = true;
    return;
  } else {
    formError.value.fromName = false;
  }

  if (form.value.fromEmail == "") {
    formError.value.fromEmail = true;
    return;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.fromEmail)) {
    formError.value.fromEmail = true;
    return;
  } else {
    formError.value.fromEmail = false;
  }

  if (form.value.message == "") {
    formError.value.message = true;
    return;
  } else {
    formError.value.message = false;
  }

  if (form.value.userResult == "") {
    formError.value.userResult = true;
    return;
  } else {
    if (parseInt(form.value.userResult) === checkMathOperation()) {
      formError.value.userResult = false;
    } else {
      formError.value.userResult = true;
      return;
    }
  }

  buttonDisabled.value = false;
};

watch(form.value, () => {
  checkForm();
});
</script>