<template>
  <div>
    <input
      v-model="data"
      :type="type"
      :placeholder="placeHolder"
      :value="value"
    />
  </div>
</template>

<script>
export default {
  name: "Input",
  props: ["type", "placeHolder", "value"],
  computed: {
    data: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("update:value", value);
      },
    },
  },
};
</script>

<style scoped lang="scss">
input {
  //width: 256px;
  width: 96%;
  margin: 0;
  outline: 0;
  overflow: hidden;
  padding: 11px 0 10px 8px;
  text-overflow: ellipsis;
  border: 1px solid rgba(var(--ca6, 219, 219, 219), 1);
  margin-bottom: 6px;
  border-radius: 3px;
  background: #f9f9f9;
  font-family: "Apple SD Gothic Neo";
}
</style>
