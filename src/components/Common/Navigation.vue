<template>
  <div class="navigation">
    <div>
      <button class="home-icon" @click="$router.push('/main')">
        <Icon name="home" />
      </button>
    </div>
    <div>
      <button>
        <Icon name="search" />
      </button>
    </div>
    <div>
      <input
        id="fileInput"
        type="file"
        style="display: none"
        ref="fileUpload"
        @change="yourVueMethod"
      />
      <button id="fileInputButton" @click="$refs.fileUpload.click()">
        <Icon name="upload" />
      </button>
      <input
        type="file"
        style="display: none"
        ref="fileInput"
        accept="image/*"
        @change="onFilePicked"
      />
    </div>
    <div>
      <button>
        <Icon name="like" />
      </button>
    </div>
    <div class="mypage">
      <button @click="$router.push('/mypage')">
        <div class="line">
          <div>
            <img :src="$store.state.user.userImage" alt="myprofile" />
          </div>
        </div>
      </button>
    </div>
  </div>
</template>

<script>
import Icon from "../../components/Common/Icon.vue";

export default {
  name: "Navigation",
  components: { Icon },
  data() {
    return {
      img: "",
    };
  },
  methods: {
    yourVueMethod(e) {
      const file = e.target.files[0];
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = (e) => {
        this.img = e.target.result;

        this.$store.dispatch("getUploadImg", {
          file,
          src: this.img,
        });
      };
      this.$router.push("/write");
    },
    onFilePicked(e) {
      console.log(e);
    },
  },
};
</script>

<style lang="scss" scoped>
.navigation {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 44px;
  border-top: 1px solid #eee;
  position: fixed;
  bottom: 0;
  width: 450px;
  background: #fff;
  & > div {
    width: 72px;
    height: 45px;
    overflow: hidden;
    margin-top: 15px;

    button {
      border: none;
      vertical-align: middle;
      height: 30px;
      background: none;
    }
  }

  .mypage {
    button {
      .line {
        border: 1px solid rgba(var(--i1d, 255, 255, 255), 1);
        border-radius: 50%;
        height: 28px;
        position: absolute;
        width: 28px;
        top: 7px;
        right: 26px;
        div {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          overflow: hidden;
          margin: 2px;

          img {
            //width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}
</style>
