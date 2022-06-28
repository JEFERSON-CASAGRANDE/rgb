window.onload = function onload() {
  apiRequest()
}

apiRequest = () => {
  const url = 'https://api.unsplash.com/search/photos?page=1&query=cars&per_page=20&client_id=TolywbwMo0nxzwgVv0TXVnbR9EvdSynGjyesH7K6T4c';
  fetch(url)
  .then(response => {
    if (!response.ok) throw Error(response.statusText);
      return response.json();
   })
   .then(data => {loadImages(data)})
   .catch(error => console.log(error));   
}
  
loadImages = (data) => {
  for(let i = 0;i < data.results.length;i++){
    const figure = document.createElement('figure');
    const image = document.createElement('img')
    const figcaption = document.createElement('figcaption')
    console.log(data)
    image.className = "cars"
    figure.appendChild(image)
    figure.appendChild(figcaption)
    image.src= data.results[i].urls.raw;
    figcaption.innerText = data.results[i].alt_description;
    document.querySelector("#grid").appendChild(figure);
  }
}
