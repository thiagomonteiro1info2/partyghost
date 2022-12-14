<script>
export default {
  props: {
    poster: String,
    titulo: String,
    LinkFilme: {
      type: Object,
    },
  },
  methods: {
    UrlDoFilme(id) {
      return `/filmes/${id}`;
    },
  },
};
</script>
<template>
  <div class="divcardfilmes">
    <router-link :to="UrlDoFilme(LinkFilme.id)">
      <img class="cardfilmes" :src="poster" />
    </router-link>
  </div>
</template>
