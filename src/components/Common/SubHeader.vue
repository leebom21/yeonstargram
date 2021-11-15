<template>
  <header>
    <div class="left-btn">
      <button @click="$emit('left')">
        <slot name="left" />
      </button>
    </div>
    <p class="title">
      {{ title }}
    </p>
    <div class="right-btn">
      <button @click="$emit('right')" class="next">
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
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  height: 44px;
  border-bottom: 1px solid #ddd;
  background: #fff;

  button {
    background: none;
    border: none;
    font-size: 16px;
    padding: 0;

    &.next {
      color: #0095f6;
      font-weight: bold;
    }
  }

  p {
    font-size: 16px;
    font-weight: bold;
  }
}
</style>
