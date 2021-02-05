const endpoint = "https://api.themoviedb.org/3/trending/all/day?api_key=781272c2b9e0700c33354a841522c539"
const key = 'api_key=781272c2b9e0700c33354a841522c539'


fetch(endpoint, {
  method:"GET",
  headers: {
    'Authorization': key,
  }
})
.then(response => response.json()) 
.then(json => console.log(json))
.catch(err => console.log(err));






