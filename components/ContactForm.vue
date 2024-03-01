<template>
    <!-- <div id="contact">
        <div class="flex-container">
          <h1 class="section-title">Contact</h1>
          <p class="desc">
            Vous voulez travailler avec moi ? en savoir plus ? Contactez moi !
          </p>
        </div>
        <div>
          <div class="contact-form">
            <span>Nom</span>
            <input type="text" id="con-form-name">

            <span>Email</span>
            <input type="email" id="con-form-email">

            <span>Message</span>
            <textarea name="" id="con-form-message" rows="5"></textarea>
          </div>
          <div class="contact-details">
            <div style="display: flex; gap: 2rem; flex-direction: column">
              <div class="single-contact">
                <img src="./assets/img/contact-icons/phone-svgrepo-com.svg" alt="">
                <span><a href="tel:0033652385065">06 00 00 00 00</a></span>
              </div>
              <div class="single-contact">
                <img src="./assets/img/contact-icons/email-svgrepo-com.svg" alt="">
                <span><a href="mailto:adlen.cherif@etu.univ-smb.fr" target="_blank">adlen.cherif@etu.univ-smb.fr</a></span>
              </div>
            </div>
            <div>
              <div id="spam-shield">
                <span>
                  <span id="shield-number-1">4</span> +
                  <span id="shield-number-2">8</span> =
                </span>
                <input type="text" id="spam-shield-input">?
              </div>
              <div class="btn btn-light" id="form-submit" style="cursor: not-allowed; opacity: 0.5;">
                Envoyer le message
                <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" stroke-width="1.5" stroke="red" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div> -->
      <div>
        <SectionHeader title="Parcours académique" description=" J'aime apprendre de nouveaux langages de programmation et je suis très à l'aise avec les langages de programmation tels que HTML, Python et JavaScript. Je suis également compétent en matière de développement Web et d'utilisation de frameworks tels que React et VueJs. Je suis également compétent en matière de bases de données et d'utilisation des systèmes de gestion de base de données tels que MySQL, PostgresSQL, FireBase " />
      <form class="flex flex-col gap-4">
          <label for="name" class="text-xl font-light uppercase">Name</label>
          <input type="text" placeholder="Name" class="py-3 px-5 rounded-full text-xl font-light uppercase transition duration-300 ease-in-out" />
          <input type="email" placeholder="Email" class="py-3 px-5 rounded-full text-xl font-light uppercase transition duration-300 ease-in-out" />
          <textarea placeholder="Message" class="py-3 px-5 rounded-xl text-xl font-light uppercase transition duration-300 ease-in-out" />
          <Button text="Send" />
      </form>
      </div>
</template>

<script setup lang="ts">

</script>