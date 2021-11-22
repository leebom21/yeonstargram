<template>
  <header>
    <div class="left-btn">
      <button @click="$emit('left')">
        <slot name="left" />
      </button>
    </div>
    <h2 class="title">
      {{ title }}
    </h2>
    <div class="right-btn">
      <button @click="$emit('right')">
        <slot name="right" />
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: "SubHeader",
  props: ["title"],
};
</script>

<style lang="scss" scoped>
header {
  display: flex;
}
</style>
