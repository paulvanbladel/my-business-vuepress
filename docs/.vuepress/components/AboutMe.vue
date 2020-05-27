<template>
  <div class="row q-pa-md content-center items-start">
    <div class="col-md-6 col-sm-12">
      <q-card flat bordered class="my-card">
        <q-card-section>
          <div class="text-h3">Know more about me</div>
        </q-card-section>

        <q-card-section class="text-h5">
          I’m Paul, professional digital transformation specialist and full
          stack (web) developer. Musician and economist by education, software
          architect by experience.</q-card-section
        >
        <q-card-section class="text-h5">
          Passionate about elegant software solutions with a focus on simplicity
          and maintainability.</q-card-section
        >
      </q-card>
      <q-card flat bordered class="my-card">
        <q-card-section>
          <div class="text-h3">I'm opionated about</div>
        </q-card-section>

        <q-card-section>
          <q-list bordered separator>
            <q-item>
              <q-item-section>
                <q-item-label>Software architecture is frozen music </q-item-label>
                <q-item-label overline lines="3"
                  >Esthetics is never a starting point in software architecture,
                  but if it's present in the end we know we made right choices.
                </q-item-label>
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section>
                <q-item-label>There is no such a thing as a free lunch </q-item-label>
                <q-item-label overline>If your think good architecture is expensive, try bad architecture.</q-item-label>
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section>
                <q-item-label>Low code if possible</q-item-label>
                <q-item-label overline>Your best code is the code that has never been written</q-item-label>
              </q-item-section>
            </q-item>
             <q-item>
              <q-item-section>
                <q-item-label>Abstraction is intentional</q-item-label>
                <q-item-label overline>the purpose of abstraction is not to be vague, but to create a new semantic level in which one can be absolutely precise.</q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label>Less is more</q-item-label>
                <q-item-label overline>The hardest part of design ... is keeping features out.</q-item-label>
              </q-item-section>
              </q-item>
            
          </q-list>
        </q-card-section>
      </q-card>
    </div>
    <!-- style="borderStyle:solid;" -->
    <div class="col-md-6 col-sm-12 text-center" data-aos="fade-right">
      <q-img
        img-class="my-custom-image"
        style="width:500px"
        :src="require('../assets/portrait-paul.png')"
      ></q-img>
    </div>
  </div>
</template>

<style lang="styl">

</style>

<script>
export default {
  name: "AboutMe",
};
</script>
