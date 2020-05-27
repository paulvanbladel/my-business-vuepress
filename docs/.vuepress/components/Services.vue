<template>
  <q-card flat bordered>
    <q-card-section>
      <div class="text-h3">Services</div>
    </q-card-section>
    <q-card-section>
      <div class="row items-center justify-center">
        <div
          class="col-xl-4 col-lg-4 col-sm-6 col-xs-12 text-center"
          v-for="item in services"
          :key="item.name"
        >
          <div class="text-bold">{{ item.title }}</div>
          <q-img style="width:100px" :src="item.src"></q-img>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<style></style>

<script>
export default {
  name: "Services",
  methods: {},
  computed: {
    services() {
      return [
        {
          name: "1",
          title: "Web Development",
          src: require("../assets/icons/web-development.png"),
        },
        {
          name: "2",
          title: "Analysis",
          src: require("../assets/icons/graphic-design.png"),
        },
        {
          name: "3",
          title: "Database Management",
          src: require("../assets/icons/dbms.png"),
        },
        {
          name: "4",
          title: "Software Development",
          src: require("../assets/icons/software-development.png"),
        },
        {
          name: "5",
          title: "Digital Marketing",
          src: require("../assets/icons/marketing.png"),
        },
        {
          name: "6",
          title: "Mobile App Development",
          src: require("../assets/icons/mobile-app.png"),
        },
      ];
    },
  },
};
</script>
