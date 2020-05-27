<template>
<div><q-badge color="blue">
     #4D96F2
</q-badge>
  <q-btn @click="$q.notify('Hello World')" color="primary">
    <slot />
  </q-btn>
  </div>
</template>
<script>
export default {
  name: "MyButton"
};
</script>