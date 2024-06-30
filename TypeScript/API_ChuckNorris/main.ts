// La interfaz es opcional de TypeScript, pero así es la estructura de lo que devuelve la API
interface JokeResponse {
  categories: string[];
  created_at: string;
  icon_url: string;
  id: string;
  updated_at: string;
  url: string;
  value: string;
}

let jsonResponse: JokeResponse | null = null; // Declaramos el objeto de la interfaz con todo null de momento
const botonFetch = document.querySelector(".boton-fetch") as HTMLButtonElement;
const textParragraph = document.querySelector("#p-objective") as HTMLParagraphElement;


const requestOptions: RequestInit = {
  method: "GET",
  redirect: "follow" as RequestRedirect
};

const fetchJoke = () => {
  fetch("https://api.chucknorris.io/jokes/random", requestOptions)
    .then((response) => response.json())
    .then((result: JokeResponse) => {
      saveResult(result);
      console.log("click y fetch")
      textParragraph.innerText = result.value;
    })
    .catch((error) => console.error(error));
};

const saveResult = (json: JokeResponse) => {
  jsonResponse = json;
  console.log(jsonResponse);
};


botonFetch.addEventListener("click", fetchJoke);
