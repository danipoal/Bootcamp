import "nes.css/css/nes.min.css";

//La interfaz es opcional de typescript, pero asi es la estructura de lo que devuelve la API
interface JokeResponse {
    categories: string[];
    created_at: string;
    icon_url: string;
    id: string;
    updated_at: string;
    url: string;
    value: string;
  }
  
let jsonResponse:JokeResponse | null = null;    //Declaramos el objeto de la interfaz con todo null de momento

const requestOptions: RequestInit = {
    method: "GET",
    redirect: "follow" as RequestRedirect 
  };

  
  fetch("https://api.chucknorris.io/jokes/random", requestOptions)
    .then((response) => response.json())
    .then((result: JokeResponse) => saveResult(result))
    .catch((error) => console.error(error));


    const saveResult = (json : JokeResponse) => {
        jsonResponse = json;
        console.log(jsonResponse);

    }    