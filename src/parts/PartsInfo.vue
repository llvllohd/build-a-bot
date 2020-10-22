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
  props: {
    partType: { type: String },
    id: {
      type: [Number, String],
      validator(value) {
        return Number.isInteger(Number(value));
      },
    },
  },
  computed: {
    part() {
      const { partType, id } = this;
      // const { partType, id } = this.$route.params;
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
