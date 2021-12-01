<template>
  <div class="modal">
    <div class="overlay" @click="$emit('close-modal')"></div>
    <div class="modal-card">
      <h2>프로필 사진 바꾸기</h2>
      <input
        id="fileInput"
        type="file"
        style="display: none"
        ref="fileUpload"
        @change="imageUpdate"
      />
      <button
        class="change"
        id="fileInputButton"
        @click="$refs.fileUpload.click()"
      >
        사진 업로드
      </button>
      <button class="delete">현재 사진 삭제</button>
      <button class="cancel" @click="$emit('close-modal')">취소</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  methods: {
    imageUpdate(e) {
      const file = e.target.files[0];
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = (e) => {
        this.img = e.target.result;

        this.$store.dispatch("getImgUpdate", {
          file,
          src: this.img,
        });
      };
      this.$emit("close-modal");
      //this.$router.push("/imageUpload");
    },
    onFilePicked(e) {
      console.log(e);
    },
  },
};
</script>

<style lang="scss" scoped>
.modal,
.overlay {
  width: 450px;
  height: 100%;
  position: fixed;
  left: 50%;
  top: 0;
  margin-left: -225px;
}
.overlay {
  opacity: 0.5;
  background: #000;
}
.modal-card {
  position: relative;
  max-width: 50%;
  margin: auto;
  margin-top: 30px;
  padding: 22px 0 0;
  background: #fff;
  //min-height: 235px;
  z-index: 10;
  border-radius: 15px;
  margin-top: 50%;
  text-align: center;
  overflow: hidden;

  h2 {
    font-size: 16px;
    margin: 0;
    padding-bottom: 22px;
  }
  button {
    font-size: 13px;
    display: block;
    width: 100%;
    border: none;
    background: #fff;
    padding: 15px 0;
    border-top: 1px solid #ddd;
    font-weight: 500;

    &.change {
      color: #0095f6;
    }
    &.delete {
      color: red;
    }

    &.cancel {
      color: #222;
    }
  }
}
</style>
