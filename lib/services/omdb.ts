export async function getPoster(imdbID: string): Promise<string> {
    try {
      const apiKey = process.env.OMDB_API_KEY;
  
      if (!apiKey) {
        throw new Error("OMDB_API_KEY não encontrada.");
      }
  
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}`
      );
  
      const data = await response.json();
  
      if (data.Response === "True" && data.Poster !== "N/A") {
        return data.Poster;
      }
  
      return "/placeholder.png";
    } catch (error) {
      console.error("Erro ao buscar pôster:", error);
      return "/placeholder.png";
    }
  }