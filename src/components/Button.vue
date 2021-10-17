<template>
  <div>
    <button @click="$emit('click')">{{ title }}</button>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: ["title"],
};
</script>

<style lang="scss" scoped>
button {
  font-family: "Apple SD Gothic Neo";
  width: 100%;
  padding: 7px 0 6px;
  margin-top: 8px;
  background: #0095f6;
  border: navajowhite;
  border-radius: 4px;
  color: #fff;

  //opacity: 0.4;
  font-size: 14px;
  font-weight: 800;
}
</style>
