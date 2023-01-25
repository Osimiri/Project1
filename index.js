
///// GLOBAL Genre variables //////////
let test = document.querySelectorAll(".inputs")
let form = document.querySelector("#mainForm")
let action = 0
let romance = 0
let sports = 0

/////SUBMIT FORM //////////
form.addEventListener("submit", (e) => {
    e.preventDefault()
    
    let newArray = [e.target.group1.value, e.target.group2.value, e.target.group3.value, e.target.group4.value, e.target.group5.value, e.target.group6.value, e.target.group7.value, e.target.group8.value, e.target.group9.value, e.target.group10.value, e.target.group11.value, e.target.group12.value, e.target.group13.value, e.target.group14.value, e.target.group15.value, e.target.group16.value, e.target.group17.value, e.target.group18.value, e.target.group19.value, e.target.group20.value]//, e.target.group21.value, e.target.group22.value, e.target.group23.value, e.target.group24.value, e.target.group25.value]
    //let newObj = {}
    let result = "action"
    const survey = document.querySelector("body > div.survey")
    

    for (let i = 0; i < newArray.length; i++) {
        if (newArray[i]) {
            if (newArray[i] === "action") {
                action++;
            }
            else if (newArray[i] === "romance") {
                romance++;
            }
            else if (newArray[i] === "sports") {
                sports++;
            }
        // if (newObj[newArray[i]]) {    HASHMAP EXAMPLE
        //     newObj[newArray[i]] += 1
        // } else {
        //     newObj[newArray[i]] = 1
        // }
    }

}
    
    if (action > romance && action > sports) {
        result = "action"
    }
    else if ( romance > action && romance > sports) {
        result = "romance"
    }
    else if (sports > romance && sports > action) {
        result = "sports"
    }
    console.log(result)
    
// let result = Object.keys(newObj).reduce((a, b) => newObj[a] > newObj[b] ? a : b);
// console.log(result)
    fetch(`https://gogoanime.consumet.org/genre/${result}`)
        .then(response => response.json())
        .then(animeData => renderAnime(animeData));

///after submitting form it will clear the questions ///
survey.style = "display: none;";     

})

// string interpolate
//fetch request could be in a global array with one of the randos from the categories 


///2 EVENT LISTENERS MOUSE OVER & MOUSE OUT/////
    const img = document.querySelector("img");
    img.addEventListener("mouseover", mouseover);
    img.addEventListener("mouseout", mouseout);
    // img.addEventListener("click",clickWaveCheck);

  
// WAVE CHECK
    function mouseover() {
        img.src = "https://static.wikia.nocookie.net/05a086e0-d917-4d10-b3db-7e683be9c525/scale-to-width/370";
    }
    
    function mouseout() {
        img.src = "https://img.wattpad.com/bea17080f84f7a16c33eeae19bdaa3429708cf3d/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f5137585932704a68474c686b78513d3d2d313031303539363934302e313635613039356639393330386233633732393334383031313731392e6a7067?s=fit&w=720&h=720";
    }

  /////////////CLOUDS/////////
const cloudOne = document.querySelector("#cloud1")  
const cloudTwo = document.querySelector("#cloud2")  
const cloudThree = document.querySelector("#cloud3")  

cloudOne.addEventListener("click",clickCloud1);
cloudTwo.addEventListener("click",clickCloud2);
cloudThree.addEventListener("click",clickCloud3);

    function clickCloud1() {
        cloudOne.src = "https://cdn.discordapp.com/attachments/1065639379634237550/1067500381027962980/image.png"
    }

    function clickCloud2() {
        cloudTwo.src = "https://cdn.discordapp.com/attachments/1065639379634237550/1067499499523690536/image.png"
    }
  
    
    function clickCloud3(){
        cloudThree.src = "https://cdn.discordapp.com/attachments/1065639379634237550/1067858958674575451/Untitled_Artwork.png"
    }

// function clickCloud1() {
//     cloudOne.src = "https://cdn.discordapp.com/attachments/1065639379634237550/1067500381027962980/image.png"
//     cloudTwo.src = "https://cdn.discordapp.com/attachments/1065639379634237550/1067499499523690536/image.png"
//     cloudThree.src = "https://cdn.discordapp.com/attachments/1065639379634237550/1067858958674575451/Untitled_Artwork.png"
// }

// function clickCloud2() {
//     cloudOne.src = "https://cdn.discordapp.com/attachments/1065639379634237550/1067500381027962980/image.png"
//     cloudTwo.src = "https://cdn.discordapp.com/attachments/1065639379634237550/1067499499523690536/image.png"
//     cloudThree.src = "https://cdn.discordapp.com/attachments/1065639379634237550/1067858958674575451/Untitled_Artwork.png"
// }


// function clickCloud3(){
//     cloudOne.src = "https://cdn.discordapp.com/attachments/1065639379634237550/1067500381027962980/image.png"
//     cloudTwo.src = "https://cdn.discordapp.com/attachments/1065639379634237550/1067499499523690536/image.png"
//     cloudThree.src = "https://cdn.discordapp.com/attachments/1065639379634237550/1067858958674575451/Untitled_Artwork.png"
// }

    //////CHROLLO INSTRUCTORS////////
// let eleanor = "https://cdn.discordapp.com/attachments/1065639379634237550/1067500381027962980/image.png" 
// let tyler = "https://cdn.discordapp.com/attachments/1065639379634237550/1067499499523690536/image.png"
// let gehrig = "https://cdn.discordapp.com/attachments/1065639379634237550/1067498704195567646/Untitled_Artwork.png"
// let dripChrollo = "https://img.wattpad.com/bea17080f84f7a16c33eeae19bdaa3429708cf3d/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f5137585932704a68474c686b78513d3d2d313031303539363934302e313635613039356639393330386233633732393334383031313731392e6a7067?s=fit&w=720&h=720"


function renderAnime(animeData) {
    let anime = animeData[Math.floor(Math.random() * animeData.length)];
    console.log(anime);// make div with image 

    const div = document.createElement("div");
    div.className = "anime-card";

    const results = document.createElement("h2");
    results.textContent = "We recommend the anime:";

    const animeName = document.createElement("h2");
    animeName.className = "anime-name";
    animeName.textContent = anime.animeTitle;

    const releaseDate = document.createElement("h3");
    releaseDate.textContent = `Release Date: ${anime.releasedDate}`;

    const img = document.createElement("img");
    img.className = "animeImg"
    img.src = anime.animeImg
    // img.width = 460
    // img.height = 650;
    

    const button = document.createElement("button");
    button.textContent = "more information";
    button.idName = "anime.id";
    button.className = "url-btn";
    //event listener to button

    button.addEventListener("click", () => {
        console.log("click")
        window.location = `${anime.animeUrl}`
    
    })

    div.appendChild(results);
    div.appendChild(img);
    div.appendChild(animeName);
    div.appendChild(releaseDate);
    div.appendChild(button);

    console.log(document.querySelector(".card"))
    ///don't need this anymore//document.querySelector(".card").replaceWith(div);

    /////////function to replace the chrollo image and akatsuki clouds with the fetched content///////
    function replaceDiv() {
        document.querySelectorAll('.card').forEach((item) => {item.replaceWith(div);})
      }
    replaceDiv();

}


