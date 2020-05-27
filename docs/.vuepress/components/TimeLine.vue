<template>
  <q-card flat bordered >
    <q-card-section>
      <div class="text-h3">Education</div>
    </q-card-section>
    <q-card-section>
      <q-timeline color="secondary">
        <q-timeline-entry
          v-for="item in education"
          :key="item.title"
          :title="item.title"
          :subtitle="item.subTitle"
        >
          <div>{{ item.more }}</div>
        </q-timeline-entry>
      </q-timeline>
    </q-card-section>
  </q-card>
</template>

<style></style>

<script>
export default {
  name: "TimeLine",
  computed: {
    education() {
      return [
        {
          title: "Master degree applied economics",
          subTitle: "University of Leuven 1996-1998",
          more: "major in corporate strategy",
        },
        {
          title: "Bachelor degree business engineering",
          subTitle: "University of Leuven 1993-1996",
          more: "major in corporate strategy",
        },
        {
          title: "First prices in piano, music theory, chamber music",
          subTitle: "Royal Conservatory Brussels 1987-1993",
          more:
            "International Competition and teaching experience. Specialties: piano music of F. Schubert, F. Chopin, L.v.Beethoven and J. Haydn. Studied under supervision of André De Groote, Arie Van Lysebeth and Jan Michiels.",
        },
        {
          title: "High school",
          subTitle: "Sint-Victor Turnhout 1981-1987",
          more: "major in mathematics",
        },
      ];
    },
  },
  methods: {},
};
</script>
