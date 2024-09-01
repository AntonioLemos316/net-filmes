// function searchMovies() {
//     const apiKey = 'SUA_CHAVE_DE_API_OMDB';
//     const searchInput = document.getElementById('searchInput').value;
//     const movieList = document.getElementById('movieList');

//     movieList.innerHTML = '';

//     fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${searchInput}`)
//         .then(response => response.json())
//         .then(data => {
//             if (data.Search) {
//                 data.Search.forEach(movie => {
//                     const movieItem = document.createElement('div');
//                     movieItem.innerHTML = `<h2>${movie.Title}</h2><p>Ano: ${movie.Year}</p>`;
//                     movieList.appendChild(movieItem);
//                 });
//             } else {
//                 movieList.innerHTML = '<p>Nenhum resultado encontrado.</p>';
//             }
//         })
//         .catch(error => console.error('Erro ao buscar filmes:', error));
// }




document.addEventListener("DOMContendLoaded", function(){
    var btnCadastrar= document.getElementById("btnCadastrar")

    btnCadastrar.addEventListener("click", function (){
         
        window.location.href="cadastro.html"
       
    })
})
