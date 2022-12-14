<script>
import axios from "axios";
import CardFilmes from "../components/CardFilmes.vue";
import FiltroComp from "../components/filtroComp.vue";
import FilmeApi from "../api/filmes.js";
import FiltrosApi from "../api/filtros.js";
const filtrosapi = new FiltrosApi();
const filmeapi = new FilmeApi();
export default {
  components: { CardFilmes, FiltroComp },
  data() {
    return {
      filmes: [],
      generos: [],
    };
  },
  async created() {
    this.generos = await filtrosapi.buscarTodosOsGeneros();
    this.filmes = await filmeapi.BuscarTodosOsFilmes();
  },
  methods: {
    getPosterUrl(poster_path) {
      return `https://image.tmdb.org/t/p/w500${poster_path}`;
    },
    async buscar(params) {
      if (params.genero !== "") {
        this.filmes = await filmeapi.BuscarFilmesPorGenero(params.genero);
      } else if (params.filme === "") {
        this.filmes = await filmeapi.BuscarTodosOsFilmes();
      } else {
        const url = `https://api.themoviedb.org/3/search/movie?api_key=c6de54ea3f8863d4b9fb5f5d0855dce0&language=pt-BR&query=${params.filme}&page=1&include_adult=false`;
        const { data } = await axios.get(url);
        this.filmes = data.results;
      }
    },
  },
};
</script>
<template>
  <div class="filmes2">
    <div class="filmes">
      <h2>FILMES</h2>
      <div class="pgnfilmes">
        <CardFilmes
          v-for="filme of filmes"
          :titulo="filme.title"
          :key="filme.id"
          :LinkFilme="filme"
          :poster="getPosterUrl(filme.poster_path)"
        />
      </div>
    </div>
    <FiltroComp @buscar="buscar" />
  </div>
</template>
