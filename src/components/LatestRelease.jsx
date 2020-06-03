import React, { Component } from "react";



function latestRelease() {
    return(






window.onload = function loadTracks (books) {
    fetch("https://striveschool.herokuapp.com/books?offset=0&limit=50")
        .then(response => response.json())
        .then(json => {
            const cardContainer = document.querySelector("#cardContainer")
            const book = document.querySelector("#Books")
            
            
            
            json.forEach(currentBook => {
                cardContainer.innerHTML += `
             <div class="col-sm-3 col-md-2 card">
                 <img src="${currentBook.img}" style ="height:250px;">   
               <div> ${currentBook.title} </div>
               <button type="button" class="btn btn-warning view-btn">Add To Basket</button>
               <button type="button" onclick = "skipBook()"class="btn btn-secondary">Skip</button>
             </div>
         `
            })
            let viewButtons = document.querySelectorAll(".view-btn");
for(let i=0;i<viewButtons.length;i++){

viewButtons[i].addEventListener("click",function(ev){
let clickedButton = ev.target;
let modalCard = document.createElement("card")
let modalImage = document.createElement("img");
let imageSrc = document.querySelectorAll(".card > img")[i].src;
modalImage.setAttribute("src",`${imageSrc}`)
modalImage.setAttribute("style","height:300px;")
let modalBody = document.querySelector(".checkout")
console.log(modalBody)
modalBody.appendChild(modalCard)
modalCard.appendChild(modalImage);
})

}
        })
        .catch(err => {
            console.log(err);
        });
        
}



    
    )}

  export default latestRelease;