const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "01234 5678 991",
          email: "manuel@localhost.com"
        },
        {
          id: "Julie",
          name: "Julie Jones",
          phone: "01234 5678 991",
          email: "julie@localhost.com"
        }
      ],
      detailsAreVisible: false
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    }
  }
});

app.mount("#app");
