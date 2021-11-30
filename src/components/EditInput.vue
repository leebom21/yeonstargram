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
  name: "EditInput",
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
  padding: 6px 0 5px 8px;
  text-overflow: ellipsis;
  border: 1px solid rgba(var(--ca6, 219, 219, 219), 1);
  margin-bottom: 6px;
  border-radius: 3px;
  background: #fff;
  font-family: "Apple SD Gothic Neo";
  margin-top: 7px;
}
</style>
