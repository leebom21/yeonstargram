<template>
  <div class="head">
    <button class="camera">카메라</button>
    <div class="logo">
      <!--logo-->
      <img
        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
        alt="logo"
      />
    </div>
    <button class="dm">DM</button>
  </div>
</template>

<script>
export default {
  components: {},
  name: "Header",
};
</script>

<style lang="scss" scoped>
.head {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 46px;
  border-bottom: 1px solid #eee;
  padding: 0 15px;
  overflow: hidden;

  button {
    border: none;
    background: none;
    .camera {
    }
    .dm {
    }
  }
  .logo {
    width: 105px;
    margin-top: 10px;

    img {
      width: 100%;
    }
  }
}
</style>
