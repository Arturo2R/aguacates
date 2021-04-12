/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
const url_base = "https://platzi-avo.vercel.app/";
const url = "https://platzi-avo.vercel.app/api/avo";

const appNode = document.querySelector("#app");
//web api
//Nos conectamos al servidos, 2 procesamos la respuesta y la convertimos en JSON
// JSON => Data => Renderizar indo
// Manera Vieja

const formatPrice = (precio) => {
  const nuevoPrecio = new window.Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "USD",
  }).format(precio);
  return nuevoPrecio;
};

window
  .fetch(url)
  .then((respuesta) => respuesta.json())
  .then((responseJson) => {
    const TodoslosItems = [];
    responseJson.data.forEach((item) => {
      //Crear imagen
      const imagen = document.createElement("img");
      imagen.src = `${url_base}${item.image}`;
      imagen.className = "h-64 mx-auto mt-5 rounded-2xl";

      //Crear titulo
      const titulo = document.createElement("h2");
      titulo.textContent = item.name;
      titulo.className =
        "text-3xl text-green-600 h-24 inline-block align-middle";

      //Crear price
      const price = document.createElement("p");
      price.textContent = formatPrice(item.price);
      price.className =
        "text-xl text-white  bg-blue-500 rounded-full py-2 px-4 w-32 mx-auto hover:bg-blue-200 ring-blue-200 ring-opacity-80 hover:ring-blue-400 hover hover:text-green-700";

      const container = document.createElement("div");
      container.append(imagen, titulo, price);
      container.className =
        "rounded-lg text-center shadow-lg hover:shadow-2xl p-6 bg-white";

      TodoslosItems.push(container);
    });

    appNode.append(...TodoslosItems);
  });

// // Con async y await;
// ;
// async function fetchData(){
//   const respuesta = await fetch(url),
//   data = await respuesta.json(), Aguacates = []

// }
