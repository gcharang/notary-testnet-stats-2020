<template>
  <v-card>
    <v-card-title>All Time</v-card-title>
    <v-data-table
      :headers="headers"
      :items="notaries"
      :sort-by="['total']"
      :items-per-page="50"
      :sort-desc="[true]"
      multi-sort
      item-key="name"
      class="elevation-1"
    >
      <template v-slot:item.ricktime="{ item }">
        <a target="_blank" :href="item.ricklink">{{ item.ricktime }}</a>
      </template>
      <template v-slot:item.mortytime="{ item }">
        <a target="_blank" :href="item.mortylink">{{ item.mortytime }}</a>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  props: {
    source: String,
  },
  async asyncData({ $axios }) {
    let notaries = await $axios.$get(
      "https://kmd-data.s3.us-east-2.amazonaws.com/notary-stats-2021/main.json"
    );
    notaries = notaries.map((notary) => {
      notary.total = notary.RICK.totalNotas + notary.MORTY.totalNotas;
      notary.name = `${notary.name} (${notary.address})`;
      notary.ricktime = notary.RICK.timeSinceLastNota;
      notary.ricklink = `https://rick.kmd.dev/tx/${notary.RICK.lastNotaTxnId}`;
      notary.mortytime = notary.MORTY.timeSinceLastNota;
      notary.mortylink = `https://morty.kmd.dev/tx/${notary.MORTY.lastNotaTxnId}`;
      return notary;
    });
    return { notaries };
  },
  data() {
    return {
      slots: ["item.<name>"],
      notaries: {},
      headers: [
        {
          text: "Name",
          align: "start",
          sortable: false,
          value: "name",
        },
        // { text: "Address", sortable: false, value: "address" },
        { text: "Total", value: "total" },
        { text: "RICK.total", value: "RICK.totalNotas" },
        { text: "RICK.lastnota", value: "ricktime" },
        { text: "MORTY.total", value: "MORTY.totalNotas" },
        { text: "MORTY.lastNota", value: "mortytime" },
      ],
    };
  },
  created() {
    this.$vuetify.theme.dark = true;
    this.pollData();
  },
  methods: {
    async pollData() {
      while (true) {
        // console.log("inside poll data");
        const notaries = await this.$axios.$get(
          "https://kmd-data.s3.us-east-2.amazonaws.com/notary-stats-2021/main.json"
        );
        this.notaries = notaries.map((notary) => {
          notary.total = notary.RICK.totalNotas + notary.MORTY.totalNotas;
          notary.name = `${notary.name} (${notary.address})`;
          notary.ricktime = notary.RICK.timeSinceLastNota;
          notary.ricklink = `https://rick.kmd.dev/tx/${notary.RICK.lastNotaTxnId}`;
          notary.mortytime = notary.MORTY.timeSinceLastNota;
          notary.mortylink = `https://morty.kmd.dev/tx/${notary.MORTY.lastNotaTxnId}`;
          return notary;
        });
        await this.delay(30000);
      }
    },
    async delay(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    },
  },
};
</script>
