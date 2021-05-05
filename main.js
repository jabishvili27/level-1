const input =document.querySelector(".input");
const button =document.querySelector('.button');
const  musics=document.querySelector(".musics");

 async function searchMusic (){
     let data =  await  fetch( `https://itunes.apple.com/search?term=${input.value}`)
     let dataa= await data.json();
      console.log(dataa.results[0]);
      musics.innerHTML="";
      input.value="";
     
      dataa.results.map(item =>
        musics.innerHTML+=
        ` <div class='mus'>
        <img  src="${item.artworkUrl100}">
        <div>${item.artistName}</div>
        <div>${item.trackName}</div>
        <a href="${item.trackViewUrl}">
       <button  class="but" > see</button>
       </a>
    </div>  `)
        

}