import axios from "axios";
export default class FilmeApi {
  async buscarTodosOsGeneros() {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=c6de54ea3f8863d4b9fb5f5d0855dce0&language=pt-BR"
    );
    return data.genres;
  }
  async pesquisarFilmes() {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=c6de54ea3f8863d4b9fb5f5d0855dce0&language=pt-BR&page=1&include_adult=false`,
    );
    return response.data.results;
  }
  async BuscarTodosOsFilmes() {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=c6de54ea3f8863d4b9fb5f5d0855dce0&language=pt-BR&page=1"
    );
    return response.data.results;
  }
  async buscarFilmePorId() {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${this.id}?api_key=c6de54ea3f8863d4b9fb5f5d0855dce0&language=pt-BR`
    );
    return response.data.results;
  }
  async BuscarFilmesPorGenero(genero) {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=c6de54ea3f8863d4b9fb5f5d0855dce0&language=pt-BR&page=1&with_genres=${genero}`
    );
    return response.data.results;
  }
}