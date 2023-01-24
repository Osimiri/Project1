let test = document.querySelectorAll(".inputs")
let form = document.querySelector("#mainForm")


form.addEventListener("submit", (e) => {
    e.preventDefault()
    
    let newArray = [e.target.group1.value, e.target.group2.value, e.target.group3.value]
    let newObj = {}
    for(let i = 0; i < newArray.length; i++) {
        if(newObj[newArray[i]]) {
            newObj[newArray[i]] += 1
        } else {
            newObj[newArray[i]] = 1
        }
    }
    let result = Object.keys(newObj).reduce((a, b) => newObj[a] > newObj[b] ? a : b);
    fetch (`https://gogoanime.consumet.org/genre/${result}`)
    .then (response => response.json())
    .then (animeData => renderAnime(animeData));

})
 // string interpolate
 //fetch request could be in a global array with one of the randos from the categories 

 function renderAnime(animeData) {
    let anime = animeData[Math.floor(Math.random()*animeData.length)];
    console.log(anime);// make div with image 
 }