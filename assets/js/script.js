fetch(
  "https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886"
)
  .then(function (response) {
    if (response.status === 200) {
      return response.json();
    } else {
      alert("Incorrect Call");
    }
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    alert(`Unfortunate error: ${error}`);
  });
