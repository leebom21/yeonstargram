<template>
  <span v-html="icon"></span>
</template>

<script>
export default {
  name: "Icon",
  props: ["name"],
  computed: {
    icon() {
      switch (this.name) {
        case "close":
          return `<svg
            aria-label="닫기"
            class="_8-yf5"
            color="#262626"
            fill="#262626"
            height="24"
            role="img"
            viewBox="0 0 48 48"
            width="24"
          >
            <path
              clip-rule="evenodd"
              d="M41.1 9.1l-15 15L41 39c.6.6.6 1.5 0 2.1s-1.5.6-2.1 0L24 26.1l-14.9 15c-.6.6-1.5.6-2.1 0-.6-.6-.6-1.5 0-2.1l14.9-15-15-15c-.6-.6-.6-1.5 0-2.1s1.5-.6 2.1 0l15 15 15-15c.6-.6 1.5-.6 2.1 0 .6.6.6 1.6 0 2.2z"
              fill-rule="evenodd"
            ></path>
          </svg>`;
        case "back":
          return ` <svg
            aria-label="뒤로"
            class="_8-yf5"
            color="#262626"
            fill="#262626"
            height="24"
            role="img"
            viewBox="0 0 48 48"
            width="24"
            style="display: inline-block; transform: rotate(270deg)"
          >
            <path
              d="M40 33.5c-.4 0-.8-.1-1.1-.4L24 18.1l-14.9 15c-.6.6-1.5.6-2.1 0s-.6-1.5 0-2.1l16-16c.6-.6 1.5-.6 2.1 0l16 16c.6.6.6 1.5 0 2.1-.3.3-.7.4-1.1.4z"
            ></path>
          </svg>`;

        default:
          return ``;
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
