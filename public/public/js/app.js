$(document).ready(function () {
  $('.modal').modal();

  var boxCards = $('#box-cards');
  function getItems(event) {
    let url = `https://api.mercadolibre.com/sites/MLA/search?q=laptops`;
    fetch(url)
      .then(handleError)
      .then(parseJSON)
      .then(addNews)
      .catch(displayError);
  };

  function handleError(res) {
    if (!res.ok) {
      throw Error(res.status);
    }
    return res;
  }

  function parseJSON(res) {
    return res.json().then(function (data) {
      var img = data.results;
      console.log(img);
      img.forEach(element => {

      boxCards.append(`<div class="col s6 m4 l3 xl3">
        <div class="card">
          <div class="card-image">
            <a class="waves-effect modal-trigger" href="#modal2">
              <img src= ${element.thumbnail}class="img-responsive">
            </a>
            <a class="btn-floating halfway-fab waves-effect waves-light style-btn-floating btn-style">Añadir a carrito</a>
          </div>
          <div class="card-content">
            <span class="card-title">${element.title}</span>
            <p>Precio:
              <span>${element.price}</span>
            </p></div></div></div>`);
      });
    })
  }

  function addNews(data) {

  }

  function displayError(err) {
    console.log("Hubo un error");
    console.log(err);
  }

  getItems();
});
