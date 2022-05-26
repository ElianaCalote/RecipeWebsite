const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com',
		'X-RapidAPI-Key': 'b77e17a651mshb7887e170c5b4a7p17307djsn736606367c43'
	}
};

function addImages (recipes) {

for (let i= 0; i < recipes.length; i ++) {
 console.log(recipes[i])
 const newImg= document.createElement("img");
 newImg.id="test"
 newImg.src= recipes[i].recipe.image;
document.getElementById("images").appendChild(newImg);
}
}




function fetchApi() {
    let searchTerm = document.getElementById("inputBox").value; 
    let apiLink= `https://edamam-recipe-search.p.rapidapi.com/search?q=${searchTerm}`;
    fetch(apiLink, options)
	.then(response => response.json())
	.then(response => addImages(response.hits))
	.catch(err => console.error(err));
}
    
document.getElementById("searchBtn").addEventListener("click",fetchApi);