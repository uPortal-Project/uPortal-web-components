<template>
    <content-grid :portlets="portlets" :favorites="favorites"></content-grid>
</template>

<script>
import ContentGrid from "./components/ContentGrid";
import oidc from "@uportal/open-id-connect";

const checkStatus = function(response) {
  //console.log("check response ", response);
  if (response.ok) {
    return response;
  } else {
    var error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
};

const parseJSON = function(response) {
  //console.log("Parse response for json ", response);
  return response.json();
};

export default {
  components: {
    ContentGrid
  },
  data() {
    return {
      portlets: [],
      favorites: []
    };
  },
  created() {
    this.fetchPortlets();
  },
  methods: {
    fetchPortlets() {
      if (process.env.NODE_ENV === "development") {
        let datas = require("./assets/browseable.json");

        this.portlets = datas.portlets;
      } else {
        oidc()
          .then(token => {
            const options = {
              method: "GET",
              credentials: "same-origin",
              headers: {
                Authorization: "Bearer " + token.encoded,
                "Content-Type": "application/json"
              }
            };
            fetch(
              process.env.VUE_APP_PORTAL_BASE_URL +
                process.env.VUE_APP_PORTAL_CONTEXT +
                process.env.VUE_APP_BROWSABLE_PORTLETS_URI,
              options
            )
              .then(checkStatus)
              .then(parseJSON)
              .then(data => {
                this.portlets = data.portlets;
                return this.portlets;
              });
          })

          .catch(function(err) {
            console.log(err);
          });
      }
      return this.portlets;
    }
  }
};
</script>

<style scoped>
</style>
