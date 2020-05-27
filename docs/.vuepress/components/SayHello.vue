<template>
  <q-card id="SayHello" flat bordered>
    <q-card-section>
      <div class="text-h3">Say Hello</div>
    </q-card-section>
    <q-card-section class="q-gutter-md column items-center" >
      <q-form data-aos="flip-up" style="width:350px">
        <q-input
          outlined 
          name="name"
          v-model="name"
          label="Your Name *"
          placedholder="First name and last name"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Thanks for your input']"
        />

        <q-input
          outlined 
          v-model="email"
          type="email"
          name="email"
          label="Your Email *"
          placedholder="Email"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Your email please']"
        />

        <q-input 
          outlined 
          v-model="message"
          name="message"
          type="textarea"
          label="Your message *"
          placedholder="Your message"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Feel free to provide your question']"
        />
        <!-- <q-toggle v-model="accept" label="I accept the license and terms" /> -->

        <div>
          <q-btn label="Submit" @click="onSubmit" color="primary" />
          <q-btn
            label="Reset" @click="onReset"
            type="reset"
            color="primary"
            flat
            class="q-ml-sm"
          />
        </div>
      </q-form>
    </q-card-section>
  </q-card>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data() {
    return {
      name: null,
      email: null,
      message: null,
    };
  },

  methods: {
    onSubmit() {
      
      var url = "https://formspree.io/xgenoblj";
      axios
        .post(url, {
          name: this.name,
          email: this.email,
          message: this.message,
        })
        .then((d) => {
          console.log('d',d)
          this.$q.notify({
            color: "green-4",
            textColor: "white",
            icon: "cloud_done",
            message: "Submitted",
          });
        });
    },

    onReset() {
      this.name = null;
      this.email = null;
      this.message = null;
    },
  },
};
</script>
