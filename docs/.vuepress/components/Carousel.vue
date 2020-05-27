<template>
  <q-carousel
    class="window-height q-pa-none"
    animated
    transition-show="jump-down"
    transition-hide="jump-up"
    v-model="slide"
    arrows
    autoplay
    navigation
    infinite
  >
    <q-carousel-slide
      v-for="item in carouselItems"
      :key="item.name"
      class="carousel"
      :name="item.name"
      :img-src="item.src"
    >
      <q-toolbar class="text-black">
        <q-space></q-space>
        <q-btn
          flat
          size="2rem"
          dense
          round
          @click="hamburgerClicked"
          aria-label="Menu"
          icon="menu"
        />
      </q-toolbar>
      <div class="absolute-center custom-caption ">
        <div class="text-h2 text-black text-weight-bolder">
         I'm Paul Van Bladel
        </div>
        <div >
          <vue-typer class="text-h4 text-white text-weight-bold"
            :text="[
              'Domain driven design',
              'Full stack application development',
              'Digital transformation',
              'Software architecture',
            ]"
            :repeat="Infinity"
            :shuffle="true"
            initial-action="erasing"
            :pre-type-delay="70"
            :type-delay="70"
            :pre-erase-delay="2000"
            :erase-delay="250"
            erase-style="clear"
            :erase-on-complete="false"
            caret-animation="blink"
          ></vue-typer>
        </div>

        <br />
        <div class="text-center">
          <q-btn color="black" @click="hireMe()" outline>Hire Me</q-btn>
        </div>
      </div>
    </q-carousel-slide>
  </q-carousel>
</template>

<style></style>

<script>
export default {
  name: "Carousel",
  methods: {
    hamburgerClicked() {
      console.log("hamb");
    },
    hireMe(){
      window.location.href="#SayHello"
    }
  },
  data() {
    return {
      slide: 1,
      //:src="require('../assets/portrait-paul.png')"
      carouselItems: [
        { name: 1, src: require("../assets/slider/slider-4.jpg") },
        { name: 2, src: require("../assets/slider/slider-6.jpg") },
        { name: 3, src: require("../assets/slider/slider-7.jpg") },
      ],
    };
  },
};
</script>

<style lang="styl" scoped>
.custom-caption
  text-align: left
  padding: 12px
  color: white
.carousel
  // filter: blur(2px)
  opacity: .7
</style>
