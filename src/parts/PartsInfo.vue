<template>
  <div>
    <h1>{{ part.title }}</h1>
    <div>
      {{ part.description }}
    </div>
  </div>
</template>

<script>
import parts from "../data/parts";
export default {
  name: "PartsInfo",
  computed: {
    part() {
      const { partType, id } = this.$route.params;
      // const partType = this.$route.params.partType;
      // const id = this.$route.params.id;
      return parts[partType].find((part) => part.id === +id);
    },
  },
  data() {
    return {};
  },
};
</script>

<style></style>
