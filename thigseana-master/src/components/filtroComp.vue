<script>
import axios from "axios";
export default {
  data() {
    return {
      params: {
        filme: "",
        genero: "",
      },
      generos: [],
    };
  },
  methods: {
    buscar() {
      this.$emit("buscar", this.params);
    },
  },
  async created() {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=c6de54ea3f8863d4b9fb5f5d0855dce0&language=pt-BR"
    );
    this.generos = data.genres;
  },
};
</script>
<template>
  <div class="DivFiltro">
    <div class="filtro_1">
      <h2>Pesquisa</h2>
      <form @submit.prevent="buscar">
        <div class="filtros">
          <input
            placeholder="Pesquise o filme"
            v-model="params.filme"
            type="text"
          />
        </div>
        <div class="filtros">
          <select v-model="params.genero" placeholder="generos">
            <option
              v-for="genero of generos"
              :key="genero.id"
              :value="genero.id"
            >
              {{ genero.name }}
            </option>
          </select>
        </div>
        <button class="BotaoFiltro" type="submit" @click="buscar">
          Buscar
        </button>
      </form>
    </div>
  </div>
</template>
