import axios from "axios";
export default class FiltrosApi {
  async buscarTodosOsGeneros() {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=c6de54ea3f8863d4b9fb5f5d0855dce0&language=pt-BR"
    );
    return data.genres;
  }
}