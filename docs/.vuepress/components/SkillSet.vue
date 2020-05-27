<template>
  <q-card flat bordered>
    <q-card-section>
      <div class="text-h3">Skill Set</div>
    </q-card-section>
    <q-card-section v-for="skill in skillSet" :key="skill.title">
      <div class="row justify-between">
        <div class="text-h5">{{ skill.title }}</div>
        <div class="text-h5">{{ getScoreLabel(skill.score) }}</div>
      </div>

      <q-linear-progress
        rounded
        size="20px"
        :value="skill.score"
        color="secondary"
        class="q-mt-sm"
      >
        <div class="absolute-full flex flex-center"></div>
      </q-linear-progress>
    </q-card-section>
  </q-card>
</template>

<style></style>

<script>
export default {
  name: "SkillSet",
  methods: {
    getScoreLabel(score) {
      var percentage = score * 100;
      return percentage.toString() + " %";
    },
  },
  computed: {
    skillSet() {
      return [
        {
          title: "Web Development",
          score: 0.9,
        },
        {
          title: "Domain driven design",
          score: 0.7,
        },
        {
          title: "C#",
          score: 0.9,
        },
        {
          title: "Javascript/TypeScript",
          score: 0.8,
        },
      ];
    },
  },
};
</script>
