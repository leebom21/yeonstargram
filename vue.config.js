module.exports = {
  devServer: {
    proxy: {
      "/api": {
        // target: "http://172.30.1.26:4000",
        target: "http://localhost:4000",
      },
    },
  },
};
